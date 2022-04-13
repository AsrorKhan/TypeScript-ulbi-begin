import * as UserTodoActionCreators from '../action-creators/user'
import * as TodoTodoActionCreators from '../action-creators/todo'
export default {
    ...UserTodoActionCreators,
    ...TodoTodoActionCreators
}
