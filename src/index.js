import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h3>Warning!</h3>
                    Are you sure you want to do that?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45pm" avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:45pm" avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jack" timeAgo="Today at 2:55am" avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Rick James Bitch" />
            </ApprovalCard>

            <ApprovalCard>\
                <CommentDetail author="what" />
            </ApprovalCard>




        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));