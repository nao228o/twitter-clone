import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* ツイッターアイコン */}
        <TwitterIcon className='sidebar--teitterIcon'/>
      
      {/* SidebarOption */}
      <SidebarOption text='ホーム' Icon={ HomeIcon }/>
      <SidebarOption text='話題を検索' Icon={ HomeIcon }/>
      <SidebarOption text='通知' Icon={ HomeIcon }/>
      <SidebarOption text='ブックマーク' Icon={ HomeIcon }/>
      <SidebarOption text='リスト' Icon={ HomeIcon }/>
      <SidebarOption text='プロフィール' Icon={ HomeIcon }/>
      <SidebarOption text='もっと見る' Icon={ HomeIcon }/>
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}


      {/* ツイートボタン */}
    </div>
  )
}

export default Sidebar
