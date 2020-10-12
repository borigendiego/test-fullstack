import React, { useState } from 'react';
import _isEmpty from 'lodash/isEmpty';
//Styles
import './files-manager.scss';
//Component
import FilesTable from './Files-table';
import Button from '@material-ui/core/Button';
import Modal from '../../common/Modal';
//Material UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    input: {
        display: 'none',
    },
}));

const FilesManager = () => {
    const [openModal, setOpenModal] = useState(false);
    const [partialSelectedFiles, setPartialSelectedFiles] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const classes = useStyles();
    const getFileInfo = (e) => {
        const selectedFiles = Object.values(e.target.files);
        const filesInfo = selectedFiles.map((file) => {
            return {
                name: file.name,
                modified: Math.round(file.lastModified / 60),
            }
        });

        setPartialSelectedFiles(filesInfo);
    };

    return (
        <div className={'files-manager-container'}>
            <hr />
            <div className={'filer-manager-header'}>
                <span>My files</span>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        component={'span'}
                        onClick={() => setOpenModal(true)}
                    >
                        Upload
                    </Button>
                    <Modal
                        shouldOpen={openModal}
                        dialogTittle={'Uploading'}
                        setOpenModel={setOpenModal}>
                        <p>Uploading files to My files</p>
                        <p>Choose where you want to upload your files below or you can drag and drop files anywhere onto this page to start uploading. You can select more than a file at a time</p>
                        <div className={classes.root}>
                            <input
                                accept={'image/*'}
                                className={classes.input}
                                id={'contained-button-file'}
                                multiple
                                type={'file'}
                                onChange={(e) => getFileInfo(e)}
                            />
                            <label htmlFor={'contained-button-file'}>
                                <Button
                                    variant={'contained'}
                                    color={'primary'}
                                    component={'span'}
                                >
                                    From my computer
                                </Button>
                            </label>
                            {
                                !_isEmpty(partialSelectedFiles)
                                    && <Button
                                        variant={'contained'}
                                        color={'primary'}
                                        component={'span'}
                                        onClick={() => {
                                            setSelectedFiles(partialSelectedFiles);
                                            setOpenModal(false)
                                        }}
                                    >
                                        Upload
                                    </Button>
                            }
                        </div>
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            component={'span'}
                            onClick={() => setOpenModal(false)}
                        >
                            Cancel
                        </Button>
                    </Modal>
            </div>
            <FilesTable files={selectedFiles} />
        </div>
    )
};

export default FilesManager