# Tally forms for the live-site hotfix

Two temporary forms for bridgelincoln.com until the new site launches. They mirror the
new database fields (`src/lib/forms/options.ts`), so a Tally CSV export can be imported
later without reshaping. **No medical fields.** Same honesty rules as the site.

Settings for both forms:
- **Notifications:** Integrations → Email notifications → "Send me an email" to your personal Gmail.
- **Branding:** the free plan shows a small Tally logo. Fine for now.
- **Thank-you page:** use the text given below each form.
- **Hidden fields** (if your plan has them): add `source`, `utm_source`, `utm_medium`, `utm_campaign`. Tally fills them from the page link, so we keep source tracking.
- When done, send me each form's **share link** (`tally.so/r/…`). The "Standard" embed code from Share → Embed would also help.

---

## Form 1: Request a visit

Title: **Request a visit**
Intro text: *A real person reads every request. Nothing is booked, and nothing is charged, until we've talked with you and your parent. Please don't include medical details.*

| # | Question (as shown) | Tally block | Required | Options (exact wording) | Maps to |
|---|---|---|---|---|---|
| 1 | Who is the appointment for? | Multiple choice | Yes | I'm their son · I'm their daughter · Other family · A friend · It's for me. I'm the one with the appointment. | `relationship` |
| 2 | Your parent's first name | Short answer | No | Show only if Q1 is not "It's for me" (conditional logic) | `parent_first_name` |
| 3 | City or town | Short answer | Yes | Default value: Omaha | `city` |
| 4 | Appointment date | Date | No | Help text: "If you know it. We can work it out on the phone." | `appointment_date` |
| 5 | What kind of appointment? | Multiple choice | Yes | Routine checkup · Specialist visit · Test or procedure · Something else. Help text: "Just the kind of visit. We don't need to know what it's for." | `appointment_kind` |
| 6 | Has your parent agreed to have a companion? | Multiple choice | Yes (if shown) | Yes, they've agreed · Not yet. I haven't asked them. · Not sure. Please talk with them. Help text: "Either way is fine. We always talk with them before anything is booked. If they say no, we don't go." Show only if Q1 is not "It's for me". | `parent_agreed` |
| 7 | What would help on the day? | Checkboxes | Yes | Getting there and back · Walking in and checking in · Company in the waiting room · Company in the exam room · Notes and an update for family · A pharmacy stop · Something else | `help_needed` |
| — | *Text block:* "The next three questions are optional. Bridge is new, and your answers help us understand how families manage appointments today." | Text | — | | |
| 8 | Who goes with your parent today? | Checkboxes | No | I take them · A brother or sister · They go alone · A ride service or taxi · A paid aide · Someone else | `who_goes_today` |
| 9 | How often are there appointments? | Multiple choice | No | Monthly or more · Every few months · A few times a year | `how_often_appointments` |
| 10 | What's the hardest part about appointments right now? | Long answer | No | Help text: "Please don't include medical details here." | `hardest_part` |
| 11 | Your name | Short answer | Yes | | `requester_name` |
| 12 | Phone | Phone number | See note | | `requester_phone` |
| 13 | Email | Email | See note | | `requester_email` |
| 14 | Anything else we should know? | Long answer | No | Help text: "For example, the best time to call. Please don't include medical details here." | `notes` |
| 15 | Bridge may call, text or email me about this request. | Checkbox | Yes | | `consent_contact` |
| 16 | I understand Tally stores this form for Bridge, and I've read the privacy policy. | Checkbox | Yes | Link "privacy policy" to `https://www.bridgelincoln.com/legal/privacy.html` | `consent_privacy` |

**Phone or email (Q12/Q13):** we need at least one. If Tally's conditional logic lets you, make Email required when Phone is empty. Otherwise make Phone required and add the help text "Prefer email? Write 'email' here and fill in the next box."

**Thank-you text:** *Thank you. We've got your request. We'll call you, then your parent, before anything is booked. No payment now.* (Add a timeframe once `[Response time]` is decided.)

---

## Form 2: Become a companion

Title: **Become a Bridge companion**
Intro text: *Bridge is a small pilot. We read every application and follow up. Please don't include ID numbers or anyone's medical details.*

| # | Question | Tally block | Required | Options / help text | Maps to |
|---|---|---|---|---|---|
| 1 | Your name | Short answer | Yes | | `name` |
| 2 | Phone | Phone number | See note above | | `phone` |
| 3 | Email | Email | See note above | | `email` |
| 4 | Where do you live? | Short answer | Yes | Help text: "City or neighborhood is enough." | `city` |
| 5 | When are you usually free? | Long answer | Yes | Help text: "For example: weekday mornings, Tuesdays and Thursdays, flexible." | `availability` |
| 6 | Do you have a car you could use? | Multiple choice | Yes | Yes · No. Help text: "This helps us plan." | `has_car` |
| 7 | Why would you like to do this? | Long answer | Yes | Help text: "A few sentences is plenty." | `why` |
| 8 | I understand Tally stores this form for Bridge, I've read the privacy policy, and Bridge may contact me about this application. | Checkbox | Yes | Link to `https://www.bridgelincoln.com/legal/privacy.html` | `consent_privacy` |

**Thank-you text:** *Thank you for applying. DJ reads every application and will get back to you.*

Don't add: background-check questions, date of birth, Social Security or license numbers, or anything about health.
