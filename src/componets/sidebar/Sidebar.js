import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* ツイッターアイコン */}
        <TwitterIcon className='sidebar--twitterIcon'/>
      
      {/* SidebarOption */}
      <SidebarOption text='ホーム' Icon={ HomeIcon }/>
      <SidebarOption text='話題を検索' Icon={ SearchIcon }/>
      <SidebarOption text='通知' Icon={ NotificationsIcon }/>
      <SidebarOption text='メッセージ' Icon={ MailIcon }/>
      <SidebarOption text='ブックマーク' Icon={ BookmarkIcon }/>
      <SidebarOption text='リスト' Icon={ FormatListBulletedIcon }/>
      <SidebarOption text='プロフィール' Icon={ PermIdentityIcon }/>
      <SidebarOption text='もっと見る' Icon={ MoreHorizIcon }/>


      {/* ツイートボタン */}
        <Button variant='outlined' className='sidebar--tweet'>ツイートする</Button>
    </div>
  )
}

export default Sidebar
