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

    app.controller('TodoItemController', function () {


    });

    app.controller('TodoController', function () {

        this.todos = todos;

        this.summary = '';
        this.description = '';


        this.setCurrentTodo = function (index) {
            this.currentTodo = this.todos[index];
            this.summary = this.currentTodo.summary;
            this.description = this.currentTodo.description;
        }

        this.addTodo = function () {
            this.todos.push({
                id: this.todos.length,
                summary: this.summary,
                description: this.description
            });
            this.summary = '';
            this.description = '';
        }

        this.deleteTodo = function () {
            for (i = 0; i < this.todos.length; i++) {
                if (this.currentTodo == this.todos[i]) {
                    this.todos.splice(i, 1);
                    return;
                }
            }
        }

        this.updateTodo = function (index) {
            var todo = this.todos[index];
            todo.summary = "x";
            todo.description = "y";
        }
    });

    app.directive('selectRadioOnClick', function () {
        // Linker function
        return function (scope, element, attrs) {
            element.bind("click", function () {
                $(this).prev().children(':radio').click();
            });
        };
    });

    app.directive('selectInputOnClick', function () {
        // Linker function
        return function (scope, element, attrs) {
            element.bind("click", function () {
                $(this).parent().next('input').focus();
            });
        };
    });

})();