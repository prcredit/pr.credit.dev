import React from 'react';
import './ContactsPage.scss';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Contacts from "../../components/Contacts/Contacts";
const ContactsPage = () => {
    return (<>
      <SectionTitle title='PR Credit - автоломбард в Києві' desc=''/>

      <Contacts />
    </>);
};
export default ContactsPage;
