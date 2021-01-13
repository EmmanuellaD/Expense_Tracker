import React from 'react'
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core'
import { Delete, MoneyOff} from '@material-ui/icons'
import usestyles from './styles'

const List = () => {
    const classes = usestyles();

    const transaction= [
        {id: 1, type: "income", category: "salary", amount: 40, date: new Date()}
    ];

    return (
        <MUIList dense= {false} className= {classes.List}>
            {transaction.map((transaction) => (
                <slide direction= "down" mountOnEnter unmountOnExit key= {transaction.id}>
                    <ListItemAvatar>
                        <Avatar className= {transaction.type === "income"? classes.avatarIncome : classes.avatarExpense}>
                        <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary= {transaction.category} secondary= {'$${transaction.amount} - $'} /> 
                    <ListItemSecondaryAction>
                        <IconButton edge= "end" aria-label="delete" onClick= "">
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </slide>
            ))}
        </MUIList>
    )
}

export default List
