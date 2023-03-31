import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, 
    TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, 
    TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton 
} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets--input'>
        <Search className='widgets--searchIcon'/>
        <input placeholder='キーワード検索' type="text"/>
      </div>

      <div className='widgets--widgetContainer'>
        <h2>いまどうしてる？</h2>

        <TwitterTweetEmbed tweetId='1583061520069513216'/>

        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="saurabhnemade"
            options={{height: 400}}
        />

        <TwitterShareButton
            url={'https://twitter.com/Shin_Engineer'}
            options={{ text: '#reactjs JS勉強中', via: 'Shin_Engineer' }}
        />

      </div>
    </div>
  )
}

export default Widgets
