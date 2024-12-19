import EmojiPicker from "emoji-picker-react";
import "./chat.css";
import { useEffect, useRef, useState } from "react";
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
  endRef.current?.scrollIntoView({ behavior: "smooth" });
},[])

  const handleEmoji = e => {
    setText((prev => prev + e.emoji))
    setOpen(false)
  }
 
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Arman Mia</span>
            <p>Lorem ipsum, dolor </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              accusamus officiis quas, repellendus inventore nulla minus ipsum
              vel quos porro, veritatis eligendi praesentium dicta dignissimos
              labore velit nisi natus laudantium?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              accusamus officiis quas, repellendus inventore nulla minus ipsum
              vel quos porro, veritatis eligendi praesentium dicta dignissimos
              labore velit nisi natus laudantium?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              accusamus officiis quas, repellendus inventore nulla minus ipsum
              vel quos porro, veritatis eligendi praesentium dicta dignissimos
              labore velit nisi natus laudantium?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              accusamus officiis quas, repellendus inventore nulla minus ipsum
              vel quos porro, veritatis eligendi praesentium dicta dignissimos
              labore velit nisi natus laudantium?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/517/088/original/vector-landscape-illustration.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              accusamus officiis quas, repellendus inventore nulla minus ipsum
              vel quos porro, veritatis eligendi praesentium dicta dignissimos
              labore velit nisi natus laudantium?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Type a message..."
          value={text}
        />
        <div className="emoji">
          <img
            onClick={() => setOpen((prev) => !prev)}
            src="./emoji.png"
            alt=""
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
