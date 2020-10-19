import React from "react";

export const Users = ()=>{
    return <table className="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Имя</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Email</th>
            <th scope="col">ID</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Иван</td>
            <td>Иванов</td>
            <td>ivanov@mail.ru</td>
            <td>1</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Петр</td>
            <td>Петров</td>
            <td>petrov@mail.ru</td>
            <td>2</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Федор</td>
            <td>Федорков</td>
            <td>fedorkov@mail.ru</td>
            <td>3</td>
        </tr>
        </tbody>
    </table>
}