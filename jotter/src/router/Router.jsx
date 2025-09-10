import { Route, Routes } from "react-router-dom";

import Start from "../pages/Sign in/Start";
import SigninLayout from "../Layout/SigninLayout";
import HomeLayout from "../Layout/HomeLayout";
import Aggrement from "../pages/Sign in/Aggrement";
import Signin from "../pages/Sign in/Signin";
import SingUP from "../pages/Sign in/Signup";
import ForgotPassword from "../pages/Sign in/ForgotPasswork";
import { InputOneTimePassword } from "../pages/Sign in/InputOneTimePassword";
import ResetPassword from "../pages/Sign in/ResetPassword";
import ProfileLayout from "../Layout/ProfileLayout";
import CalenderLayout from "../Layout/CalenderLayout";
import FavoriteLayout from "../Layout/FavoriteLayout";
import Home from "../pages/Home/Home";
import Folders from "../pages/Home/Folders";
import Images from "../pages/Home/Images";
import Pdfs from "../pages/Home/Pdfs";
import Notes from "../pages/Home/Notes";
import ImgViewer from "../pages/Home/ImgViewer";
import Folder from "../pages/Home/Folder";
import PDFViewer from "../pages/Home/PDFViewer";
import NoteViewer from "../pages/Home/NoteViewer";
import EnterPin from "../pages/Home/EnterPin";
import Favorite from "../pages/FavoriteFolder/favorite";
import Calender from "../pages/Calender/Calender";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/Profile/EditeProfile";
import Setting from "../pages/Profile/Setting";
import ChangePassword from "../pages/Profile/setting/ChangePassword";
import Support from "../pages/Profile/Support";
import TermsAndCondition from "../pages/Profile/setting/Terms&condition";
import About from "../pages/Profile/setting/About";
import Privacy from "../pages/Profile/setting/Privacy";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="folders" element={<Folders />}></Route>
        <Route path="images" element={<Images />}></Route>
        <Route path="pdfs" element={<Pdfs />}></Route>
        <Route path="notes" element={<Notes />}></Route>
        <Route path="imageViewer" element={<ImgViewer />}></Route>
        <Route path="Folder/:folderName" element={<Folder />}></Route>
        <Route path="pdf/:folderName" element={<PDFViewer />}></Route>
        <Route path="Note/:folderName" element={<NoteViewer />}></Route>
        <Route path="pin" element={<EnterPin />}></Route>
      </Route>
      <Route path="/signin" element={<SigninLayout />}>
        <Route index element={<Signin />}></Route>
        <Route path="signup" element={<SingUP />}></Route>
        <Route path="reset" element={<ResetPassword />}></Route>
        <Route
          path="verificationOTP"
          element={<InputOneTimePassword />}
        ></Route>
        <Route path="forgot" element={<ForgotPassword />}></Route>
        <Route path="intro" element={<Start />}></Route>
        <Route path="start" element={<Aggrement />}></Route>
      </Route>
      <Route path="/favorite" element={<FavoriteLayout />}>
        <Route index element={<Favorite />}></Route>
      </Route>
      <Route path="/Calendar" element={<CalenderLayout />}>
        <Route index element={<Calender />}></Route>
      </Route>
      <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<Profile />}></Route>
        <Route path="edit" element={<EditProfile />}></Route>
        <Route path="setting" element={<Setting />}></Route>
        <Route path="ChangePassword" element={<ChangePassword />}></Route>
        <Route path="support" element={<Support />}></Route>
        <Route path="Terms" element={<TermsAndCondition />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="privacy" element={<Privacy />}></Route>
      </Route>
      <Route path="*" element="not found "></Route>
    </Routes>
  );
}
