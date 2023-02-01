


const SsgPage = ({users}) => {
    return (
        <>
            <div>SSG</div>
            <ul>
                {users.map((user) => <li>{user.name} - {user.email}</li>)}
            </ul>
        </>
    )
}

export async function getStaticProps() {
    // const users = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await users.json()
    const data = [
        {name: 'Deva', email: 'd@gmail.com'},
        {name: 'Feva', email: 'f@gmail.com'}
    ];
    console.log('SSG data', data);
    return {
        props: { users: data }
    }
}

export default SsgPage;