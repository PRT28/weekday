import React from "react";
import './JobCard.css';
import { PrimaryButton, ScondaryButton } from "../Button/Button";
import { currCode } from "../../utils/currencyCodeMapping";

const JobCard = ({jobData}) => {

    // const jobData = {
    //     "jdUid": "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
    //     "jdLink": "https://weekday.works",
    //     "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    //     "maxJdSalary": 61,
    //     "minJdSalary": null,
    //     "salaryCurrencyCode": "USD",
    //     "location": "delhi ncr",
    //     "minExp": 3,
    //     "maxExp": 6,
    //     "jobRole": "frontend",
    //     "companyName": "Dropbox",
    //     "logoUrl": "https://logo.clearbit.com/dropbox.com"
    // }

    const {
        jobRole,
        minExp,
        maxJdSalary,
        minJdSalary,
        location,
        companyName,
        logoUrl,
        jobDetailsFromCompany,
        jdLink
    } = jobData

    return (
        <div className="job-card">
            <div className="job-card-header">
                <img src={logoUrl} alt=""  />
                <div>
                    <div className="company">{companyName}</div>
                    <div className="role">{jobRole}</div>
                    <div className="location">{location}</div>
                </div>
            </div>
            <div className="est-salary">Estimated Salary: Rs{minJdSalary ? `${minJdSalary} - ` : ''}{maxJdSalary} LPA ✅</div>
            <div className="jd-container">
                <div className="job-description">
                    <div className="about-comp">About Company:</div>
                    <p>
                        <strong>About us</strong>
                    </p>
                    <p>{jobDetailsFromCompany}</p>
                    
                </div>
                <div className="center">
                    <a target="_blank" href={jdLink} rel="noreferrer">View Job</a>
                </div>
            </div>            
            <div className="min-exp">Minimum Experience</div>
            <div className="exp">{minExp ? `${minExp} years` : 'NA'}</div>
            <PrimaryButton>⚡ Easy Apply</PrimaryButton>
            <ScondaryButton>Ask for refferal</ScondaryButton>
        </div>
    );
};


export default JobCard; 
