import './addUser.css'
const AddUser = () => {
    return (
        <div className='addUser'>
            <form>
                <input type="text" placeholder='UserName' name="username" id="" />
                <button>Search</button>
            </form> 
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" alt="" />
                    <span>Arman Mia</span>
                </div>
                <button>Add User</button>

            </div>
        </div>
    );
};

export default AddUser;