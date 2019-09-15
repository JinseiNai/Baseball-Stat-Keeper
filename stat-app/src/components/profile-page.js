import React from 'react';
import FakeData from '../fake-database';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    CheckData = () => {
        console.log({FakeData});
    }

    render() {
        return (
            <div className="profilePage">
                {/* Section where profile info goes */}
                <div>
                    <button onClick={this.CheckData}>Check Data</button>
                </div>
            </div>
        )
    }
}

export default ProfilePage;