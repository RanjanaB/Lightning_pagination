({
    retriveAccount : function(component) {
        component.set('v.Columns',[{label:'Account Name',fieldName:'Name',type:'text'},
                                   {label:'Account Number', fieldName:'AccountNumber',type:'Integer'},
                                   {label:'Phone',fieldName:'Phone',type:'Integer'}]);
        var action=component.get('c.retriveAccount');
        action.setCallback(this,function(response){
            if(response.getState()=== 'SUCCESS'){
                component.set("v.AccountList",response.getReturnValue());
                var defaultcount=component.get('v.defaultCount');
                var temAcc=[];
                for(var i=0; i<defaultcount; i++){
                    temAcc.push(response.getReturnValue()[i]);
                }   
                component.set('v.Previous',true); 
                component.set('v.TempList',temAcc);
                component.set('v.countCheck',defaultcount);
                
            }
            
        });
        $A.enqueueAction(action);
        
    },
    onNextHelper : function(component) {
        var accountList=component.get('v.AccountList');
        var countCheck=component.get('v.countCheck') ;
        var defaultCount=component.get('v.defaultCount');
        var incrementCount=countCheck + defaultCount;
        
        /* if(incrementCount >= accountList.length){
           incrementCount= accountList.length;
        }*/
        
        var temAcc=[];
        component.set('v.Previous',false);       
        for(var i=countCheck;i<incrementCount;i++){
            if(i==accountList.length){
                break;
            }
            temAcc.push(accountList[i]);
            
        }
        component.set('v.TempList',temAcc);
        if(incrementCount< accountList.length){
            component.set('v.countCheck',incrementCount);
        }
        
                
        if(countCheck+defaultCount>= accountList.length){
            component.set('v.Next',true); 
        }
        
    },
    onPreviousHelper : function(component) {
        var accountList=component.get('v.AccountList');
        var countCheck=component.get('v.countCheck') ;
        var defaultCount=component.get('v.defaultCount');
        var decrementCount=countCheck - defaultCount;
        var temAcc=[];
        component.set('v.Next',false); 
        for(var i=decrementCount;i<countCheck;i++){
            temAcc.push(accountList[i]);
        }
        component.set('v.TempList',temAcc);
        component.set('v.countCheck',decrementCount);
        
        if(decrementCount < defaultCount){
            component.set('v.Previous',true);
        }
    }
})