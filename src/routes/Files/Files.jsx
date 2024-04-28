import React from 'react'
import "./Files.modules.css"
import Slidefiles from '../../component/Slidefiles';
import { FaRegFilePdf } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";
import { AiOutlineFileWord } from "react-icons/ai";
import { BsFiletypeCsv } from "react-icons/bs";
import {Link} from "react-router-dom"


const Files = () => {

    const cardFiles = [
        {
            image : "../media/pdf (1).svg" ,
            file : "my-file.pdf" ,
            name : "Elzero" ,
            date : "20/06/2020" ,
            size : "5.5MB"
        },
        {
            image : "../media/avi.svg" ,
            file : "my-file.avi" ,
            name : "Admin" ,
            date : "16/5/2021" ,
            size : "12.5MB"
        },
        {
            image : "../media/eps.svg" ,
            file : "my-file.eps" ,
            name : "Uploader" ,
            date : "16/5/2021" ,
            size : "2.7MB"
        },
        {
            image : "../media/dll (1).svg" ,
            file : "my-file.dll" ,
            name : "Coder" ,
            date : "16/5/2021" ,
            size : "2.2MB"
        },
        {
            image : "../media/png (1).svg" ,
            file : "my-file.png" ,
            name : "Designer" ,
            date : "16/5/2021" ,
            size : "1.1MB"
        },
        {
            image : "../media/dll (1).svg" ,
            file : "my-file.dll" ,
            name : "Coder" ,
            date : "16/5/2021" ,
            size : "2.2MB"
        },
        {
            image : "../media/png (1).svg" ,
            file : "my-file.png" ,
            name : "Designer" ,
            date : "16/5/2021" ,
            size : "1.1MB"
        },
        {
            image : "../media/psd (1).svg" ,
            file : "my-file.psd" ,
            name : "Osama" ,
            date : "16/5/2021" ,
            size : "15.5MB"
        },
        {
            image : "../media/pdf (1).svg" ,
            file : "my-file.pdf" ,
            name : "Elzero" ,
            date : "20/06/2020" ,
            size : "5.5MB"
        },
        {
            image : "../media/avi.svg" ,
            file : "my-file.avi" ,
            name : "Admin" ,
            date : "16/5/2021" ,
            size : "12.5MB"
        },
        {
            image : "../media/eps.svg" ,
            file : "my-file.eps" ,
            name : "Uploader" ,
            date : "16/5/2021" ,
            size : "2.7MB"
        }
    ]


  return (
            <div>
                    <h1>Files</h1>
                    <div className="div1"></div>
                    <div className="Boxs-files">
                        {cardFiles.map ((el) => <Slidefiles image ={el.image} file={el.file} name ={el.name} date ={el.date} size ={el.size}  />)}
                        <div className="slide" id="slide5">
                            <h2>Files Statistics</h2>
                            <div className="files">
                                <div className="file">
                                    <div className="icon">
                                        <div className="bl">
                                            <FaRegFilePdf className='i'/>
                                        </div>
                                        <div className="text">
                                            <div>PDF Files</div>
                                            <p>130</p>
                                        </div>
                                    </div>
                                    <div className="size">6.5GB</div>
                                </div>
                                <div className="file">
                                    <div className="icon">
                                        <div className="gr">
                                            <FaImages className='i'/>
                                        </div>
                                        <div className="text">
                                            <div>PDF Files</div>
                                            <p>130</p>
                                        </div>
                                    </div>
                                    <div className="size">6.5GB</div>
                                </div>
                                <div className="file">
                                    <div className="icon">
                                        <div className="re">
                                            <AiOutlineFileWord  className='i'/>
                                        </div>
                                        <div className="text">
                                            <div>PDF Files</div>
                                            <p>130</p>
                                        </div>
                                    </div>
                                    <div className="size">6.5GB</div>
                                </div>
                                <div className="file">
                                    <div className="icon">
                                        <div className="or">
                                            <BsFiletypeCsv className='i'/>
                                        </div>
                                        <div className="text">
                                            <div>PDF Files</div>
                                            <p>130</p>
                                        </div>
                                    </div>
                                    <div className="size">6.5GB</div>
                                </div>
                                <Link className="upload" to="#">
                                    <i className="fa-solid fa-angles-up mr-10"></i>
                                    <sapn>Upload</sapn>
                                </Link>
                            </div>
                        </div>
                        {cardFiles.map ((el) => <Slidefiles image ={el.image} file={el.file} name ={el.name} date ={el.date} size ={el.size}  />)}
                    </div>
            </div>
  )
}

export default Files
