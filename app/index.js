var USER_DATA = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
};

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = function (props) {
  return <img src={props.image} style={{height: 100, width: 100}}/>
};

var Link = (props) => {
  function changeUrl() {
    window.location.replace(props.href)
  }
  return (
      <span style={{color: 'aqua', cursor: 'pointer'}}
            onClick={changeUrl}>
        {props.children}
      </span>
  )
};

var ProfileLink = function (props) {
  return (
      <div>
        <Link href={'https://www.github.com/' + props.username}>
          {props.username}
        </Link>
      </div>
  )
};

var ProfileName = function (props) {
  return (
      <div>{props.name}</div>
  )
};

var Avatar = function (props) {
  return (
      <div>
        <ProfilePic image={props.user.image} />
        <ProfileName name={props.user.name} />
        <ProfileLink username={props.user.username} />
      </div>
  )
};

ReactDOM.render(
    <Avatar user={USER_DATA} />,
    document.querySelector('#app')
);



/*
** The first example
** =================

var HelloReact = React.createClass({
  render: function() {
    return (
      <div> Hello, ReactJS Program!</div>
    )
  }
});

**
*/


/*
 ** The second example
 ** ==================

var FriendsContainer = React.createClass({
  render: function(){
    var name = 'Tyler McGinnis';
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
    return (
        <div>
          <h3> Name: {name} </h3>
          <ShowList names={friends} />
        </div>
    )
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
        <div>
        <h3> Friends </h3>
        <ul>
        {listItems}
        </ul>
        </div>
    )
  }
});

**
*/

/*
 ** The third example
 ** =================

var ProfilePic = function (props) {
  return <img src={'https://photo.fb.com/' + props.username} />
};
var ProfileLink = function (props) {
  return (
      <a href={'https://www.fb.com/' + props.username}>
        {props.username}
      </a>
  )
};
var Avatar = function (props) {
  return (
      <div>
        <ProfilePic username={props.username} />
        <ProfileLink username={props.username} />
      </div>
  )
};

**
*/
