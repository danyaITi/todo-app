import React, { ChangeEvent } from "react";

type SortProps = {
    statusFilter: string
    changeStatus: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Sort: React.FC<SortProps> = ({statusFilter,changeStatus}) => {
    return (
        <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
            <select id="status" value={statusFilter} onChange={changeStatus} >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Incompleted">Incompleted</option>
            </select>
        </ul>
    )
}
export default Sort