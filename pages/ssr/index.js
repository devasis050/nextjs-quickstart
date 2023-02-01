
const SsrPage = ({users}) => {
    return (
        <>
            <div>SSR</div>
            <ul>
            {users.map((user) => <li>{user.name}</li>)}
            </ul>
        </>
    )
}


export async function getServerSideProps() {
    // const users = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await users.json()

    const data = [
        {name: 'Deva', email: 'd@gmail.com'},
        {name: 'Feva', email: 'f@gmail.com'}
    ];

    console.log('SSR data', data);
    return {
        props: { users: data }
    }
}

export default SsrPage;