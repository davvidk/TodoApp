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
        this.currentTodo;

        this.summary = '';
        this.description = '';


        this.setCurrentTodo = function (index) {
            console.log(index);
            this.currentTodo = this.todos[index];
            this.summary = this.currentTodo.summary;
            this.description = this.currentTodo.description;
        }

        this.addTodo = function () {
            if (this.currentTodo !== undefined) {
                this.currentTodo.description = this.description;
                this.currentTodo.summary = this.summary;
            } else {
                this.todos.push({
                    id: this.todos.length + 1,
                    summary: this.summary,
                    description: this.description
                });
                this.clearFields();
            }
        }

        this.deleteTodo = function () {
            for (i = 0; i < this.todos.length; i++) {
                if (this.currentTodo === this.todos[i]) {
                    this.todos.splice(i, 1);
                    this.clearFields();
                    return;
                }
            }
        }

        this.newTodo = function () {
            this.clearFields();
        };

        this.clearFields = function () {
            this.summary = '';
            this.description = '';
            this.currentTodo = undefined;
        }
    });

    app.directive('selectRadioOnClick', function () {
        // Linker function
        return function (scope, element, attrs) {
            element.bind("click", function () {
                element.parent().find("input")[0].click();
            });
        };
    });

    app.directive('selectInputOnClick', function () {
        // Linker function
        return function (scope, element, attrs) {
            element.bind("click", function () {
                console.log(element.parent().next());
                element.parent().next()[0].focus();
            });
        };
    });

})();