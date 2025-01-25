"use client"
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '../../../../firebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import {getFirestore, setDoc, collection, doc} from "firebase/firestore";
import { useUser } from '@clerk/nextjs'
import {generateRandomString} from '../../../utils/GenerateRandomString'
import { useRouter } from 'next/navigation'

function Upload() {
  const {user} = useUser();
  const storage = getStorage(app);
  const db = getFirestore(app);
  const router = useRouter();
  const [fileDocId, setFileDocId] = useState();
  const [uploadCompleted, setUploadCompleted] = useState(false);

  const [progress, setProgress] = useState();
  const uploadFile = (file) => {

    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress);
        console.log('Upload is ' + progress + '% done')
        progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at ', downloadURL);
          saveInfo(file, downloadURL);
          setUploadCompleted(true);
        })
      })
    
  }

  const saveInfo = async (file, fileUrl) => {

    try {
      const docId = generateRandomString();
      const docRef = await setDoc(doc(db, "users", docId), {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        fileUrl: fileUrl,
        userEmail: user.primaryEmailAddress.emailAddress,
        userName: user.fullName,
        password: '',
        id: docId,
        shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId
      })
      setFileDocId(docId)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  useEffect(() => {
    uploadCompleted && setTimeout(() => {
      setUploadCompleted(false);
      router.push('/file-preview/' + fileDocId);
    }, 2000)
  })


  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>
        Start
        <strong className='text-primary'> Uploading </strong>File and <strong className='text-primary'>Share</strong> it</h2>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)} progress={progress}/>
    </div>
  )
}

export default Upload