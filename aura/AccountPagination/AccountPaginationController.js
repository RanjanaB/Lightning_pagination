({
	init : function(component, event, helper) {
		helper.retriveAccount(component);
	},
    
    onNext:function(component, event, helper){
        helper.onNextHelper(component);
    },
    
    onPrevious:function(component, event, helper){
        helper.onPreviousHelper(component);
    }
})