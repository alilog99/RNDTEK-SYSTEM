import React from 'react'
import PropTypes from 'prop-types'


class OurServicesTabs extends React.Component{
  

    render(){
        return(
            <div class="row">
            <div class="col-3">
              <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"style={{color:'black'}}>Home</a>
                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"style={{color:'black'}}>Profile</a>
                <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"style={{color:'black'}}>Messages</a>
                <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"style={{color:'black'}}>Settings</a>
              </div>
            </div>
            <div class="col-9">
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" style={{color:'black'}}>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"style={{color:'black'}}>Cillum ad ut irure tempor velit nostrud occaent. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborue eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur.  occaecat.</div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"style={{color:'black'}}>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magneur laborum qui. Id id reprehenderit sit est eu aliqua occaecat et velit excepteur laborum mollit dolore eum dolor in occaecat commodo et voluptate minim reprehenderaborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</div>
                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" style={{color:'black'}}>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Vendidunt do esse magna mollit excepteur laqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecnim et cillum eu deserunt excepteur ea incididunt minim occaecat.</div>
              </div>
            </div>
          </div>
        )
    }
}

OurServicesTabs.defaultProps = {

}

OurServicesTabs.propTypes = {
    style: PropTypes.object
}

export default OurServicesTabs;