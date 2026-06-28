/** MOCK CLIENT USING CHATGPT
 *
 * Client: Horizon Properties Inc.
 * - We are a small real estate company with 12 employees.
 * - We currently manage around 200 properties (houses, apartments, commercial spaces, and lots). Everything is done in Excel, Messenger, and paper documents.
 * - We're looking for a web application that can centralize everything.
 */

/**
 * Problems:
 * 1. We don't know what's available - They don't know which unit are available, some of their employees offers the same unit. ( requires RND )
 *
 * 2. We lose customer inquiries - Create a centralize inquiry consulation. e.g agent A talk to customer 1 on this date.
 *
 * 3. Reservation chaos - Customer can book a reservation that last 7 days, but some employees forget to expire the reservations until the forgotten property stays unavailable forever. ( requires RND )
 *
 * 4. Documents are everywhere - every property has land title, tax declaration, photos, floor plan and contracts and sometimes employees merge them in random folders or file dissappears.
 *
 * 5. Price changes - owner wants to change a unit price e.g house #15 from 5.2M to 5.6M.
 *   - owner should able to edit it
 *   - owner can assign someone to edit it
 *   - requires RBAC
 *
 * 6. Managers need reports - How many properties sold?, How many reserved?, Which agent sold the most?, Which city has the most inventory? Revenue this month?
 */
