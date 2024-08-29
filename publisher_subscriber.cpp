#include<iostream>
#include<vector>
#include<string>
#include<memory>
#include<algorithm>

using namespace std;


class Subscriber {

    public:
        Subscriber(const string &name) : name(name) {}
        void update(const string &message){
            cout << "Subscriber " << name << " : Has received the message :: "<<message<<endl;
        }

    private:
    string name;
};

class Publisher { 

    public : 
    void Subscribe(shared_ptr<Subscriber>subscriber){
        subscribers.push_back(subscriber);
    }

    void UnSubscribe(shared_ptr<Subscriber>subscriber){
        subscribers.erase(remove(subscribers.begin(), subscribers.end(),subscriber) , subscribers.end());
    }

    void notify(const string &message){
        for(auto &subscriber : subscribers){
            subscriber->update(message);
        }
    }

    private :
        vector<shared_ptr<Subscriber>>subscribers;
};




int main(){

    Publisher publisher;
    auto subscriber1 = make_shared<Subscriber>("Subscirber1");
    auto subscriber2 = make_shared<Subscriber>("Subscriber2");
    auto subscriber3 = make_shared<Subscriber>("Subscriber3");
    publisher.Subscribe(subscriber1);
    publisher.Subscribe(subscriber2);
    publisher.Subscribe(subscriber3);
    publisher.notify("Hello World Notified");
    publisher.notify("Hello world notified again");
    publisher.UnSubscribe(subscriber2);
    publisher.notify("Goodbye friends");
    return 0;
}