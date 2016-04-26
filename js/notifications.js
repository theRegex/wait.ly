waiter.service('notification', function(notify) {
//Trivial Prototype -- should soon be switched to cordova push notifications ....
    var notification = this;

    notification.profileUpdated = function(msg) {
        notify({

            duration: 3000,
            classes: "success",
            message: msg,
            position: "right",
        });


    }
    notification.savedLocation = function(msg) {
        notify({

            duration: 3000,
            classes: "success",
            message: msg,
            position: "right",
        });


    }
    notification.dataConflict = function(msg) {

        notify({

            duration: 3000,
            classes: "warning",
            message: msg,
            position: "right",
        });


    }


    notification.info = function(msg) {

        notify({

            duration: 3000,
            classes: "info",
            message: msg,
            position: "right",
        });


    }



})
