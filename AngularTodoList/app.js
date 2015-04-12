(function () {
    var todos = [
        {
            id: '1',
            summary: 'Das ist erstes Todo',
            description: 'Hausaufgaben machen'
        },
        {
            id: '2',
            summary: 'Das ist mein zweites Todo',
            description: 'Hausarbeit erledigen'
        },
               ]

    var app = angular.module('todoApp', []);
    app.controller('TodoController', function () {

        this.todos = todos;

        this.currentSummary = '';
        this.currentDescription = '';

        this.setCurrentTodo = function (index) {
            this.currentTodo = this.todos[index];
        }

        this.addTodo = function () {
            this.todos.push({
                id: this.todos.length,
                summary: this.currentSummary,
                description: this.currentDescription
            });
            this.currentSummary = '';
        }

        this.deleteTodo = function () {
            for (i = 0; i < this.todos.length; i++) {
                if (this.currentTodo == this.todos[i]) {
                    this.todos.splice(i, 1);
                    return;
                }
            }
        }
    });

})();