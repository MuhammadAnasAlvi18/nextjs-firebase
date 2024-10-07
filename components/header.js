'use client'

import Image from "next/image";
import logoTop from "../public/images/olx-logo-vector.png";
import logo from "../public/images/olx-logo-vector-black.png";
import { Avatar, Button, Container, FormControl, Menu, MenuItem, Select, TextField } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { collection, addDoc, setDoc, doc, getDoc, getDocs } from "firebase/firestore"; 
import db from "./firebase";
import CircularProgress from '@mui/material/CircularProgress';
import { ShoppingCart } from "@mui/icons-material";

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const IsOpen = Boolean(anchorEl);

    const handleIsOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };


    // const [age, setAge] = useState('');
    // const [id, setId] = useState('');
    // const [loader, setLoader] = useState(false);
    // const [user, setUser] = useState([]);
    // const [formData, setFormData] = useState({
    //     fullname: "",
    //     age: ""
    // });
    // const [error, setError] = useState("");

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // }

    // const addData = async () => {
    //     setLoader(true);
    //     if(formData){
    //         const { fullname, age } = formData;
    //         if(fullname && age){
    //                 const docRef = await addDoc(collection(db, "users"), {
    //                   fullname,
    //                   age,
    //                   time: new Date().getDate(),
    //                 });
    //                 const id = docRef.id;
    //                 id && setLoader(false);
    //                 setId(id);
    //                 console.log("Data Added: " + id);
    //                 setError("Data Added Successfully");
    //                 setFormData({ fullname: "", age: "" });
    //         } else{
    //             setError("Please Fill All Fields");
    //             setLoader(false);
    //         }
    //     }
    // }
    // const getData = async () => {
    //     setLoader(true);
    //     try {
    //         const querySnapshot = await getDocs(collection(db, "users"));
    //         const users = [];
    //         querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //         users.push(doc.data());
    //         setUser(users);
    //         console.log(user);
    //         setLoader(false);
    //         });

    //         // const docRef = doc(db, "users", id);
    //         // const docSnap = await getDoc(docRef)
    //         // if (docSnap.exists()) {
    //         //     const data = docSnap.data();
    //         //     console.log("Document data:", data);
    //         //     setData(data);
    //         //     setLoader(false);
    //         // }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    return(
       <>
        <div className="header-main bg-[#2b2628] backdrop-blur-[5px] w-full fixed top-0 left-0 flex items-center justify-between gap-16 py-3 px-20 border-b border-solid border-white">
            <div className="header-logo">
                <Link href={"/"}><h1 className="text-[32px] text-white font-bold">Logo</h1></Link>
            </div>
            <ul className="header-links flex items-center gap-16 text-base font-medium text-white">
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/products'}>Products</Link>
                </li>
            </ul>
            <div className="header-options flex items-center gap-8 text-white">
                <div className="">
                    <Button id="basic-button" aria-controls={IsOpen ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={IsOpen ? 'true' : undefined}
                            onClick={handleIsOpen}
                            >
                        <Avatar onClick={handleIsOpen} className="bg-white text-black"></Avatar>
                    </Button>
                    <Menu anchorEl={anchorEl} onClose={handleClose} open={IsOpen} id="basic-menu" MenuListProps={{'aria-labelledby': 'basic-button',}}>
                        <MenuItem>Signup</MenuItem>
                        <MenuItem>Login</MenuItem>
                    </Menu>
                </div>
                <Link href={"/cart"}><ShoppingCart className="text-3xl"></ShoppingCart></Link>
            </div>

        </div>
       </>
    )
}

export default Header;