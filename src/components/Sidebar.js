import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon  from '@material-ui/icons/AddCircleOutline';
import { sidebarItemsData } from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import { useHistory } from 'react-router-dom';

function Sidebar(props) {
const history = useHistory();

const goToChannel = (id) => {
  if(id) {

    history.push(`/room/${id}`)
  }
}

const addChannel = () => {
  const promptName = prompt("enter channel name");
  if(promptName){
    db.collection('rooms').add({
      name: promptName
    })
  }
}

  return (
  <Container >
        <WorkspaceContainer >
          <Name >
          clever
          </Name >
          <NewMessage >
          <AddCircleOutlineIcon />
          </NewMessage >
     </WorkspaceContainer >
        <MainChannels >
              {
              sidebarItemsData.map(item => (
                <MainChannelItem >
                  {item.icon}
                  {item.text}
                </MainChannelItem >
              ))
              }
        </MainChannels >
        <ChannelsContainer >
            <NewChannelContainer>
              <div>
              <br />
              Channels <br/>
              </div>
              <AddIcon onClick ={addChannel} />
            </NewChannelContainer >
            <ChannelsList >
            {
              props.rooms.map(item => (
                <Channel onClick={()=>goToChannel(item.id)}>
                #{item.name}
                </Channel>
              ))
          }
             </ChannelsList>
        </ChannelsContainer >
 </Container>
  );
}

export default Sidebar;


const Container = styled.div`
background-color: #3f0e40;
`

const WorkspaceContainer = styled.div`
color: white;
height: 64px;
display: flex;
align-items: center;
padding-left:19px;
justify-content: space-between;
border-bottom:1px solid red;

`

const Name = styled.div`
color:red;
`

const NewMessage = styled.div`
width:36px;
height:36px;
background: white;
color:#3F0e40;
fill:  grey;
display:flex;
justify-content:center;
align-radius:50%;
margin-right:20px;
cursor: pointer;

`

const MainChannels = styled.div`
  padding-top: 20px;
`

const MainChannelItem = styled.div`
color: rgb(188,171,188);
display: grid;
grid-template-columns:15% auto;
height: 28px;
align-items:center;
padding-left: 19px;

cursor:pointer;
:hover {
  background: #350036;
}
`

const ChannelsContainer = styled.div`
  color: rgb(188,171,188);
  margin-top:10px;
`
const NewChannelContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  height:20px;
  padding-left:19px;
  padding-right:12px;
`

const ChannelsList = styled.div`

  display:flex;
  display: grid;

  height: 28px;
  align-items:center;
  padding-left: 0px;
  cursor:pointer;
  justify-content: space-between;
  align-items:center;
  height:20px;
  padding-left:0px;
  padding-right:12px;

`
const Channel = styled.div`
  display:flex;
  height:20px;
  align-items:left;
  cursor:pointer;
  padding-left:19px;
  padding-top: 10px;
:hover {
  background: #350036;
}
`
