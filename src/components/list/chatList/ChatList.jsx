
import { useState } from 'react';
import './chatList.css'
import AddUser from '../../addUser/AddUser';
const ChatList = () => {
    const [addMode, setAddMode] = useState(false)
    return (
      <div className="chatList">
        <div className="search">
          <div className="searchBar">
            <img src="./search.png" alt="" />
            <input type="text" name="" id="" placeholder="Search" />
          </div>
                <img
                    onClick={()=> setAddMode((prev)=> !prev)}
            src={addMode ? "./minus.png" : "./plus.png"}
            alt=""
                    className="add"
                    
          />
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Arman Mia</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Arman Mia</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Arman Mia</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Arman Mia</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Arman Mia</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Arman Mia</span>
                    <p>Hello</p>
                </div>
            </div>
            { addMode && <AddUser/>}
      </div>
    );
};

export default ChatList;