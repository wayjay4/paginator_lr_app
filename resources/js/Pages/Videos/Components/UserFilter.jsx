function UserFilter({users, selectedUser, handleSelection}) {
    return (
        <div className={'flex justify-center mt-2'}>
            <div>
                <select value={selectedUser} onChange={handleSelection} id="user" name="user" className="mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-indigo-600 sm:text sm:leading-6">
                    <option value="0">All</option>
                    {users.map((user) => {
                        return <option key={user.id} value={user.id}>{user.name}</option>
                    })}
                </select>
            </div>
        </div>
    );
}

export default UserFilter;
