const Tile = ({ user, number }) => {

    function getClass() {
        console.log("called twice");
        if (user.Bet == number) {
            user.Wins = parseInt(user.Wins) + 1;
            return "shadow borderGreen";
        }
        else {
            user.Loses = parseInt(user.Loses) + 1;
            return "shadow borderRed";
        }

    }

    return (
        <div className={getClass()} style={{ display: 'inline-flex', padding: 15, margin: 10, width: 200, height: 200, backgroundColor: 'white', borderRadius: 10, boxShadow: 1 }}>
            <div>
                <div>
                    <img style={{ width: 50, height: 50, borderRadius: 5, marginRight: 10 }} src={user.ProfileImage} />
                    {user.Name}
                </div>
                <div align='left' style={{ marginTop: 10 }}>
                    <div>Price : {user.Price}</div>
                    <div>Bet : {user.Bet}</div>
                    <div>Wins : {parseInt(user.Wins/2)}</div>
                </div>
            </div>
        </div>
    );
};

export default Tile;