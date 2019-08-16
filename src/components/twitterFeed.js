import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const twitterFeed = () => {
    return (
        <div className = "twitter-feed">
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="NYCTSubway"
            options={{height: 430}}
            theme="dark"
            noHeader
            noFooter
            autoHeight
            />
        </div>
    )
}

export default twitterFeed;