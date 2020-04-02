public class AccountClass {
    @AuraEnabled
    public static List<Account> retriveAccount(){
        return [Select Name ,AccountNumber,Phone From Account order by Name asc limit 23];
    }
}