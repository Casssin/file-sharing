"use client"
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { app } from '../../../../../firebaseConfig'
import React, { use, useEffect, useState } from 'react'
import FileInfo from './_components/FileInfo'
import FileShareForm from './_components/FileShareForm'
import { ArrowLeftSquare} from 'lucide-react'
import Link from 'next/link'

function FilePreview({params}) {
  const db = getFirestore(app);
  const param = use(params);
  const [file, setFile] = useState();

  useEffect(() => {
    console.log(param?.fileId)
    param?.fileId && getFileInfo();
  }, [])

  const getFileInfo = async () => {
    const docRef = doc(db, "users", param?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  const onPasswordSave= async (password) => {
    console.log(password)
    const docRef = doc(db, "users", param?.fileId);
    await updateDoc(docRef, {
      password:password
    });
  };

  return (
    <div className='py-10 px-20'>
      <Link href='/upload' className='flex gap-3'><ArrowLeftSquare/>Go to Upload</Link>
      <div className='grid gird-cols-1 md:grid-cols-2 mt-5'>
        <FileInfo file={file}/>
        <FileShareForm file={file} onPasswordSave={(password) => onPasswordSave(password)}/>
      </div>
    </div>
  )
}

export default FilePreview