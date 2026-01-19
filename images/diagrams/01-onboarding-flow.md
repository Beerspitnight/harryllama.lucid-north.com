# Harry Llama Scheduler - System Onboarding Flow

**Target Audience:** Principals & Assistant Principals  
**Purpose:** Complete system setup and configuration process

This diagram shows the complete 7-step onboarding process that educational administrators follow to set up the Harry Llama Scheduler system for their school.

## Process Overview

The onboarding flow guides administrators through:
1. **School Information Setup** - Basic school details and academic calendar
2. **Period Type Configuration** - Class, Prep, Duty, and Lunch period definitions
3. **Bell Schedule Processing** - PDF upload with Harry's intelligent parsing
4. **Master Schedule Integration** - CSV upload with teacher assignment analysis
5. **Co-Teaching Relationship Confirmation** - Validating teaching partnerships
6. **Teacher Schedule Finalization** - Complete assignment review
7. **Academic Calendar Setup** - Holidays, PD days, and special events

## Mermaid Diagram

```mermaid
flowchart TD
    A[Start Onboarding] --> B[Step 1: School Information]
    B --> |Enter school details, dates, academic year| C[Step 1.5: Configure Period Types]
    C --> |Define Class, Prep, Duty, Lunch periods| D[Step 2: Upload Bell Schedule PDF]
    D --> |Harry processes PDF with vision| E{Bell Schedule Valid?}
    E -->|Yes| F[Step 2: Confirm Parsed Templates]
    E -->|No| G[Manual Template Entry]
    G --> F
    F --> |Approve schedule templates| H[Step 3: Upload Master Schedule CSV]
    H --> |Harry analyzes teacher assignments| I{Master Schedule Valid?}
    I -->|Yes| J[Step 4: Review Co-Teaching Pairs]
    I -->|No| K[Manual Schedule Correction]
    K --> J
    J --> |Confirm co-teacher relationships| L[Step 5: Finalize Teacher Schedules]
    L --> |Review all teacher assignments| M[Step 6: Academic Calendar Setup]
    M --> |Define holidays, PD days, events| N[Step 7: Final System Confirmation]
    N --> |Activate Harry system| O[Dashboard Ready]
    
    style A fill:#E06B1E,color:#fff
    style O fill:#4A3F7A,color:#fff
    style D fill:#EF8A30,color:#000
    style H fill:#EF8A30,color:#000
    style E fill:#E06B1E,color:#fff
    style I fill:#E06B1E,color:#fff
```

## Key Features

- **Automated Document Processing:** Harry uses advanced vision processing to extract bell schedule information from PDF documents
- **Intelligent Validation:** Each step includes validation checks to ensure data accuracy
- **Error Recovery:** Manual entry options available when automatic processing needs adjustment
- **Co-Teacher Detection:** Harry automatically identifies teaching partnerships from schedule data
- **Comprehensive Setup:** Complete system configuration in a guided, step-by-step process

## Benefits for Administrators

- **Time Savings:** Automated processing reduces setup time from days to hours
- **Accuracy:** Harry's analysis reduces human error in schedule interpretation
- **Flexibility:** Manual override options ensure system works with any school configuration
- **Completeness:** Guided process ensures no critical setup steps are missed