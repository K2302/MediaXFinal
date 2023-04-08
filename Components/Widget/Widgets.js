import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className="widgets">
      {/* <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div> */}

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTimelineEmbed
          sourceType="lists"
          screenName="Btcplace"
        options={{ height: 500 ,width: 300 }}
        />
        {/* <a class="twitter-timeline" href="https://twitter.com/Btcplace/lists/cryptocurrency-list?ref_src=twsrc%5Etfw">A Twitter List by Btcplace</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
      </div>
    </div>
  );
}

export default Widgets;
