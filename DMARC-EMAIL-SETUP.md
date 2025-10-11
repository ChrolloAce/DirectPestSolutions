# DMARC Email Setup Instructions

## Current DMARC Record
```
Type: TXT
Host/Name: _dmarc
Value: v=DMARC1; p=none;
```

## Updated DMARC Record (To Receive Reports)
To send DMARC reports to **directpestsolutions@hotmail.com**, update your DMARC TXT record to:

```
Type: TXT
Host/Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:directpestsolutions@hotmail.com
```

## How to Update in Resend Dashboard

1. Go to your Resend dashboard
2. Navigate to **Domains** → **maktubworkspace.com**
3. Find the DMARC record section
4. Click **Edit** on the DMARC TXT record
5. Update the **Value** field to:
   ```
   v=DMARC1; p=none; rua=mailto:directpestsolutions@hotmail.com
   ```
6. Click **Save**

## What This Does

- **v=DMARC1** - DMARC version 1
- **p=none** - Policy is set to monitoring only (no action taken on failed emails)
- **rua=mailto:directpestsolutions@hotmail.com** - Sends aggregate reports to this email address

## Expected Results

After updating:
- You'll receive daily aggregate reports about emails sent from your domain
- Reports include information about SPF, DKIM, and DMARC alignment
- Helps you monitor email authentication and detect spoofing attempts

## Additional Recommended Settings (Optional)

For enhanced reporting, you can also add:
```
v=DMARC1; p=none; rua=mailto:directpestsolutions@hotmail.com; ruf=mailto:directpestsolutions@hotmail.com; pct=100
```

Where:
- **ruf** - Sends forensic failure reports (detailed info about individual failures)
- **pct=100** - Applies policy to 100% of emails

## DNS Verification

After updating, it may take 24-48 hours for DNS changes to propagate. You can verify using:
```bash
dig _dmarc.maktubworkspace.com TXT
```

Or online tools like:
- https://mxtoolbox.com/dmarc.aspx
- https://dmarcian.com/dmarc-inspector/

---

**Domain:** maktubworkspace.com  
**Created:** 24 days ago  
**Region:** us-east-1 (North Virginia)  
**Status:** All DNS records verified ✓

