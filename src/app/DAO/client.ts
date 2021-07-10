export class client{
    id : number;
    name:string;
    brewery_type:string;
    street:string;
    city:string;
    state:string;
    postal_code:string;
    country:string;
    longitude:string;
    latitude:string;
    phone:string;
    website_url:string;
    updated_at:string;
    tag_list:[];

    constructor(){
        this.id = null;
        this.name = "";
        this.brewery_type = "";
        this.street = "";
        this.city = "";
        this.state = "";
        this.postal_code = "";
        this.country = "";
        this.longitude = "";
        this.latitude = "";
        this.phone = "";
        this.website_url = "";
        this.updated_at="";
        this.tag_list=null;


        
    }
}
