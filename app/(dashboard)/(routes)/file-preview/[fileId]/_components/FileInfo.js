import Image from 'next/image';
import React, { useState } from 'react'
import { useEffect } from 'react';

function FileInfo({file}) {
    const [fileType, setFileType] = useState();
    useEffect(() => {
        file && setFileType(file?.fileType.split('/')[0])
        console.log(fileType);
    }, [file])
  return file && (
    <div className = 'text-center border flex justify-center m-4 flex-col items-center p-2 rounded-md border-blue-200'>
        <Image src={fileType=='image'?file?.fileUrl:'/file.svg'} width = {100} height={100} className='h-[200px] rounded-md object-contain' alt='file info'/>
        <div>
            <h2>{file.fileName}</h2>
            <h2 className='text-gray-400 text-13px'>{file.fileType}</h2>
        </div>
    </div>
  )
}

export default FileInfo