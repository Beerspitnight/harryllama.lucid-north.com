# Harry Llama Scheduler - Daily Scheduling Workflow

**Target Audience:** Principals & Assistant Principals  
**Purpose:** Morning routine and daily coverage management

This diagram illustrates the typical morning workflow that educational administrators follow when using the Harry Llama Scheduler system to manage daily operations and teacher coverage.

## Process Overview

The daily scheduling workflow includes:
1. **Morning Dashboard Review** - Quick overview of the day's schedule
2. **Absence Detection** - Checking for teacher absences
3. **Automated Report Processing** - Harry analyzes absence reports with vision
4. **Coverage Plan Generation** - Intelligent assignment of substitute coverage
5. **Administrative Review** - Final approval and adjustments
6. **Staff Communication** - Notifications to affected personnel
7. **Ongoing Monitoring** - Real-time coverage status tracking

## Mermaid Diagram

```mermaid
flowchart TD
    A[Morning: Access Dashboard] --> B{[Upload Absence Report PDF}
    B --> C[Upload Absence Report PDF]
    C --> D[Manually Add Absences & Subs] 
    D --> E[Harry Analyzes Report & IDs Teachers & Subs]
    E --> F[Harry Identifies Teachers & Substitutes]
    F --> G[Automatic Coverage Plan Generation]
    G --> H[Review & Approve or Modify Plan]
    H --> I[Update Coverage Status]
    J --> K[Automatically Notify Staff of Assignments*]
    L --> M[Monitor Dashboard, Run Reports, View Advanced Analytics]
   
    
    subgraph "Harry's Intelligent Processing"
        E
        F
        G
    end
    
    style A fill:#4A3F7A,color:#fff
    style G fill:#E06B1E,color:#fff
    style I fill:#EF8A30,color:#000
    style L fill:#4A3F7A,color:#fff
```

## Key Features

- **Vision-Powered PDF Processing:** Harry reads absence reports directly from PDF documents
- **Intelligent Teacher Recognition:** Automatic identification of absent teachers and available substitutes  
- **Smart Coverage Matching:** Harry considers teacher qualifications, availability, and preferences
- **Real-Time Updates:** Dashboard reflects current coverage status throughout the day
- **Automated Notifications:** Staff receive immediate updates about their assignments

## Benefits for Administrators

- **Streamlined Morning Routine:** Complete coverage planning in minutes instead of hours
- **Reduced Manual Work:** Automatic processing eliminates manual data entry
- **Improved Accuracy:** Harry's analysis reduces missed assignments and scheduling conflicts
- **Better Communication:** Automated notifications ensure all staff are informed promptly
- **Data-Driven Insights:** End-of-day reports provide valuable analytics for future planning

## Integration Points

- **Student Information System:** Harry can integrate with existing absence reporting systems
- **Communication Platforms:** Notifications can be sent via email, SMS, or school communication apps
- **Calendar Systems:** Daily schedules sync with school calendar platforms

<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600">
  <style>
    /* Set a default font */
    text {
      font-family: Arial, sans-serif;
      font-size: 14px;
      fill: #000; /* black text unless overridden */
    }

    /* Node colors (you can map them from Mermaid styles) */
    .node rect {
      fill: #e0e0e0;
      stroke: #333;
      stroke-width: 1px;
    }

    /* Specific overrides for your Mermaid IDs */
    #A rect { fill: #4A3F7A; }
    #A text { fill: #fff; }

    #G rect { fill: #E06B1E; }
    #G text { fill: #fff; }

    #I rect { fill: #EF8A30; }
    #I text { fill: #000; }

    #M rect { fill: #4A3F7A; }
    #M text { fill: #fff; }
  </style>
