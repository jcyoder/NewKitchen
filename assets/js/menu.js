/*  Menu JavaScript */

var MenuModule = function () {};

$(document).ready(function () {
    
    MenuModule.prototype.init = function () {
        /* this is a reference to the instance of the MenuModule class created below*/
        var self = this;
        this.menutab = 'breakfast';
        var currenttab = $('ul.navb a#' + this.menutab).addClass('chosen');
        var tabhref = this.ajax(currenttab.attr('href'));

        $('ul.navb a').on('click', function (e) {
            /*anchor has a native handler - we are cancelling the native handler*/
            e.preventDefault();
            self.handleclick($(this));
        });
    };
    
    /* $el $ means wrapped in jQuery, el stands for element */
    MenuModule.prototype.handleclick = function ($el) {
        this.menutab = $el.attr('id');
        $('ul.navb a').removeClass('chosen');
        $el.addClass('chosen');
        this.ajax($el.attr('href'));
    };
    MenuModule.prototype.ajax = function (url) {
        var self = this;
        $.ajax({url: url, success: function (data) {
            self.handleajax(data);
        }
            });
    };
    
    MenuModule.prototype.handleajax = function (data) {
        /* $data is the same as saying var data - just reminding myself that it is a jQuery object*/
        var $data =  $(data);
        console.log($data);
        $('#contentpane').html($data.html());   
    };
    var menuModule = new MenuModule();
    menuModule.init();
});