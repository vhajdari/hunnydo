$(document).ready(function () {

    function submitForm(){
        $("#addTaskBtn").click(function(){
            $.ajax({
                type: "POST",
                url: "/do",
                data: $("#addTaskForm").serialize(),
                success: function(response){
                    $("#addTask").modal('hide'); //hide popup 
                    //console.log(response);
                    $(location).attr('href', '/'); 
                },
                error: function(){
                    errorAlert()
                }
            });
        });
    }

    function deleteTask(){
        $(".deleteBtn").click(function(){
            var task_id = $(this).parent().attr('id');
            var url = "/delete/" + task_id
            $.ajax({
                type: "POST",
                url: url,
                success: function(response){
                    console.log(url);
                    $(location).attr('href', '/'); 
                },
                error: function(){
                    errorAlert()
                }
            });
        });
    }

    function completeTask(){
        $(".doneBtn").click(function(){
            var task_id = $(this).parent().attr('id');
            var url = "/tasks/" + task_id
            $.ajax({
                type: "POST",
                url: url,
                success: function(response){
                    console.log(url);
                    $(location).attr('href', '/'); 
                },
                error: function(){
                    errorAlert()
                }
            });
        });
    }

    function errorAlert(){
        alert("Oops.  Something went wrong!");
        console.log('error');
    }

    function toggleCompletedTasks(){
        $("#hideBtn").click(function(){
           $('.list-group').find('li[status="done"]').toggle();
        });
        
    }

    submitForm();
    deleteTask();
    completeTask();
    toggleCompletedTasks();

});