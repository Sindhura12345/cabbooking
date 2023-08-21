public class t
{
    public static void main(string args[])
    {
        Runnable obj1=new Runnable()
        {
            public void run()
            {
                for(int i=1;i<=5;i++)
                {
                    System.out.println("hii");
                    try{ Thread.sleep(1000);} catch(Exception e){}
                }
            }
        };
        Runnable obj2=new Runnable()
        {
            public void run()
            {
                for(int i=1;i<=5;i++)
                {
                    System.out.println("hlo");
                    try{ Thread.sleep(1000);} catch(Exception e){}
                }
            }
        };
        Thread t1=new Thread(obj1);
        Thread t2=new Thread(obj2);
        t1.start();
        try{
            Thread.sleep(10);
        }
        catch(exception e){}
        t2.start();
    }
} 