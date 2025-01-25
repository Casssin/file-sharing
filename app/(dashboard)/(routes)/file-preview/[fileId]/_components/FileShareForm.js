import { Copy } from 'lucide-react';
import React, { useState } from 'react'

function FileShareForm({file, onPasswordSave}) {
    const [isPasswordEnable, setIsEnablePassword] = useState(false);
    const [password, setPassword] = useState('');

  return file && (
    <div className='flex flex-col gap-2'>
        <div>
            <label className='text-[14px] textgray-500'>Short URL</label>
            <div className='flex gap-5 p-2 border rounded-md'>
                <input type='text' value={file.shortUrl} disabled={true} className='disabled:text-gray-500 bg-transparent outline-none flex-1' />
                <Copy className='text-gray-400 hover:text-gray-700'></Copy>
            </div>
        </div>
        <div className='gap-3 flex mt-5'>
            <input type='checkbox' onChange = {(e) => setIsEnablePassword(e)} />
            <label>Enable Password?</label>
        </div>
        {isPasswordEnable ? 
            <div className='flex gap-3 items-center'> 
            <div className='border rounded-md w-full p-2'>
                <input type="password" className='disabled:text-gray-500 bg-transparent outline-none w-full' onChange = {(e) => setPassword(e.target.value)} />
            </div>
            <button className='p-2 bg-primary text-white rounded-md disabled:bg-gray-300 hover:bg-secondary' disabled={password?.length<3} onClick={()=>onPasswordSave(password)}>
                Save
            </button>
            </div> : null }
    </div>
  )
}

export default FileShareForm