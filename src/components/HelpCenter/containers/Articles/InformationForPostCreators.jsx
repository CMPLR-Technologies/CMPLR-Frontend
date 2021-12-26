import React from 'react';

export default function InformationForPostCreators() {
    return (
        <div>
            <section className="article-info">
                <h1
                    title="Information for Post+ Creators"
                    className="article-title"
                >
                    Information for Post+ Creators
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        {/*Title: Information for Post+ Creators*/}
                        <div className="article-nav">
                            <h2>Navigation</h2>
                            <ul>
                                <li>
                                    <a href="#getting-started">
                                        Getting Started as a Post+ Creator
                                    </a>
                                </li>
                                <ul>
                                    <li>
                                        <a href="#stripe-onboarding">
                                            Completing the Stripe Onboarding
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#set-pricing">Set Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#creator-description">
                                            Enter a Creator Profile Description
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#perks">Select Your Perks</a>
                                    </li>
                                </ul>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#creator-responsibilities">
                                        Understand Your Responsibilities as a
                                        Post+ Creator
                                    </a>
                                </li>
                                <ul>
                                    <li>
                                        <a href="#providing-content">
                                            Providing Content and Delivering on
                                            Perks
                                        </a>
                                    </li>
                                </ul>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#payments">Payments</a>
                                </li>
                                <ul>
                                    <li>
                                        <a href="#fees">Fees</a>
                                    </li>
                                    <li>
                                        <a href="#payout-frequency">
                                            Payout Frequency
                                        </a>
                                    </li>
                                </ul>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#managing-supporters">
                                        Managing Your Supporters
                                    </a>
                                </li>
                                <ul>
                                    <li>
                                        <a href="#issues-and-refunds">
                                            Handling Transaction Issues and
                                            Refund Requests
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#blocking-supporters">
                                            Blocking a Supporter
                                        </a>
                                    </li>
                                </ul>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#creating-plus-posts">
                                        Creating Post+ Content
                                    </a>
                                </li>
                                <ul>
                                    <li>
                                        <a href="#plus-post-web">
                                            Making a +Post on Web
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#plus-post-app">
                                            Making a +Post in the App
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#existing-posts">
                                            Adding a Paywall to an Existing Post
                                        </a>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <h2 id="getting-started">
                            Getting Started as a Post+ Creator
                        </h2>
                        <p>
                            You'll have to go through a few steps before you can
                            activate Post+ on your blog.
                        </p>
                        <p>
                            To get started, navigate to your Post+ settings
                            page:
                        </p>
                        <ul>
                            <li>
                                Click the account icon (
                                <img
                                    src="https://tumblr.zendesk.com/hc/article_attachments/4403863119639/snowman.png"
                                    alt=""
                                    width="12px"
                                    height="15px"
                                />
                                ), then scroll down to the blog you'd like to
                                use.
                            </li>
                            <li>
                                If you're using a secondary blog, click the
                                person icon with three lines to the right of
                                your blog name to expand the options for that
                                blog.
                            </li>
                            <li>Click "Post+."</li>
                        </ul>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403903934615/postPlusMenu.png"
                                alt="A screenshot from the account icon dropdown menu on web. It's cropped to only show one blog's options: silvercoins. The background is white. The blog avatar is at the top left. It's an image of Miles O'Brien in his Starfleet uniform, smiling and looking straight at the camera. To the right in bold black text is the blogname: silvercoins. Below that in gray text is the word: funky. There are two gray icons to the right: One is a human silhouette with three lines, the other is an icon with four dots in a square. The options (all in black text) in the menu are as follows: Posts (the number 23 appears to the right of this option), Followers (the number 4 appears to the right of this option), Activity, Members, Drafts, Queue, Post+ (an orange indicator appears to the right of this option and in white text it reads: New!), and Edit Appearance."
                            />
                        </p>
                        <p>
                            This will take you to the Post+ settings page, where
                            you'll go through the set up and activation process.
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403903956503/postPlusSettings.png"
                                alt="A screenshot of the Post+ settings page on web. The background is Tumblr blue. A white rectangle in the center of the screen shows the different settings. Large white text at the top reads: Tumblr Post+. At the very bottom, small gray text reads: Questions or need help? Contact Tumblr Support (this is in blue text and contains a link to the Support form). At the top of the white rectangle, gray text reads: Activating Post+ is simple. Just complete the sections below to get thing started. The first section is: Personal and deposit details. Text below that header reads: View and edit your details over at Stripe. On the right is a blue button that reads: Set up. The next section is Subscription price. Gray text below the header reads: Set your monthly price. On the right is blue text that reads: Set up. The third section is: Post+ profile. Gray text below this header reads: Share your story and add perks. A blue botton on the right reads: Set up. Small gray text at the bottom of the white rectangle reads: By activating Post+ you agree to our Terms of Service (in blue) and that you have read our Privacy Policy (in blue). There's a gray, inactive button to the right that reads: Activate Post+"
                                width={599}
                                height={441}
                            />
                        </p>
                        <div className="callout">
                            <p>
                                <strong>
                                    Not seeing these Post+ settings?
                                </strong>{' '}
                                You'll need to make sure you meet our{' '}
                                <a href="/hc/articles/4402757539607#eligible-creators">
                                    current creator criteria
                                </a>
                                .
                            </p>
                        </div>
                        <h3 id="stripe-onboarding">
                            Completing the Stripe Onboarding
                        </h3>
                        <p>
                            This is where you'll enter your payment information.
                            Click "Set up" to get started. This will take you to{' '}
                            <strong>Stripe</strong>, our payment processor.
                        </p>
                        <p>
                            You'll start by filling out some basic information.
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403903968407/postPlusStripeStepOne.png"
                                alt="A screenshot of Stripe's first step in the sign up process. It's a white background with black text. Text on the left side of the screen reads: Tumblr partners with Stripe for secure payments and financial services. Text at the bottom reads: Powered by Stripe. Contact. English (US), with an arrow to change the language. On the right side of the screen is a form. At the top, large black text reads: Get paid by Tumblr. Smaller text below reads: Fill out a few details so you can start getting paid. The first field is labeled Country. United States is selected. Text below reads: Please select the country where you or your business will legally operate. The next field is Type of entity. The three options listed are: Individual, sole proprietor, or single-member LLC, Company, and Nonprofit Organization. The next field is: Mobile number. The text field reads: US (with the option to change country), followed by a placeholder number: (201) 555-0123. Text below the field reads: We'll text this number to verify your account. The next field is labeled Email. The field has placeholder text that reads: me@example.com. Text below the field reads: We'll email you with important updates. A purple button at the bottom of the form reads: Next with a right-pointing arrow."
                            />
                        </p>
                        <p>
                            Right now, Post+ can only be activated by creators
                            living in the United States. That's set as the
                            current default, so you can leave that option as-is.
                            Next, select the type of entity (most folks will
                            fall under the first option: Individual, sole
                            proprietor, or single-member LLC).
                        </p>
                        <p>
                            Next, enter your mobile number. Stripe will use this
                            number to verify your account, so make sure to use
                            your real phone number.
                        </p>
                        <p>
                            Then, enter your email address. Again, you'll need
                            to use a real email address here because Stripe will
                            use it to verify your account.
                        </p>
                        <p>
                            Once you've filled everything in, click "Next." You
                            will see this page:
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403910315543/postPlusStripeVerify.png"
                                alt="A screenshot of the next step in the Stripe sign up flow. The left side of the page is the same as the previous screenshot. On the right side of the page is black text that reads: Enter the verification code we sent to your phone. Below the text is an icon representing a mobile phone with a green text message icon. Below that is a field with six spaces. Purple text below the field reads: Resend code. Below that is a left-pointing arrow and purple text that reads: Use a different mobile number."
                            />
                        </p>
                        <p>
                            Stripe will send a verification code to the mobile
                            number you entered on the previous screen. Enter the
                            code in the indicated field.
                        </p>
                        <p>
                            If you didn't get a code, click "Resend code." Still
                            nothing? Click "Use a different mobile number" to go
                            back to the previous page and make sure that you've
                            entered your number correctly.
                        </p>
                        <p>
                            When you're done here, you'll move on to this page:
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403904002839/postPlusPersonalDetails.png"
                                alt="A screenshot of the next step in the Stripe sign up flow. The left side of the page is the same as the previous screenshot. On the right side of the page is a form. The title at the top reads: Personal details. Text below the title reads: Tell us a few details about yourself. The first section in the form is labeled: Legal name of person. The first field has placeholder text: First name. The second field has placeholder text: Last name. The next section is labeled Email address. The field has been autofilled with: chiefobrien@starfleet.com. The next section is labeled: Date of birth. The field has placeholder text: MM/DD/YYYY. The next section is labeled Home address. The fields have the following placeholder text: United States (with arrows to select other countries), Address line 1, Address line 2, City, State (with arrows to select the state), ZIP. The next section is labeled Phone number. The placeholder text reads: +1 (201) 555-0123. The next section is labeled Social Security Number. The placeholder text in the field reads: 123-45-6789. Small text below the field reads: To verify your identity, we'll need to know your full Social Security Number. A purple button at the bottom reads: Next with a right-pointing arrow. "
                            />
                        </p>
                        <p>
                            Fill out each field on this page with your real
                            information.
                        </p>
                        <p>
                            <strong>An important note about names:</strong> You
                            have to use your legal name on Stripe. Your
                            supporters cannot see it. If your legal name changes
                            in the future, you can{' '}
                            <a href="/hc/articles/4402764366615#updating-details">
                                update it from your account tab on Stripe
                            </a>
                            .
                        </p>
                        <p>
                            Check that you've entered everything correctly, then
                            click "Next" to move on to the next step:
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403910337943/postPlusBusinessDetails.png"
                                alt="A screenshot of the next step in the Stripe sign up flow. The left side of the page is the same as the previous screenshot. On the right side of the page is a form. The title at the top reads: Business details. Smaller text below the title reads: Tell us some basics about your business. The first field is labeled Industry. The field below reads: Please select your industry... and has arrows to the right. The next field is labeled Business website and it is pre-filled with the URL https://tumblr.com/creator/silvercoins. A purple button below that field reads: Next with a right-pointing arrow."
                            />
                        </p>
                        <p>
                            We know that most of our users don't have a formal
                            business set up—that's okay. Select the "Industry"
                            option that most closely matches what you'll be
                            using Post+ for (when in doubt, you can fall back on
                            the "Blogs and Written Content" option).
                        </p>
                        <p>
                            The "Business website" field is auto-populated with
                            your creator profile URL, but you can change it to
                            use whatever URL you'd like.
                        </p>
                        <p>
                            When you're ready to move on, click "Next" to set up
                            your payment details. You have a choice to make
                            here. You can link Stripe directly to your bank
                            account:
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403904013335/postPlusPayoutBank.png"
                                alt="A screenshot of the next step in the Stripe sign up flow. The left side of the page is the same as the previous screenshots. On the right side of the page is a form. The title at the top reads: Select an account for payouts. Smaller text below the title reads: A payout is the transfer of funds from Stripe to your bank account. Link your account to seamlessly receive payouts and help us better understand your business. The form begins with two options: Bank account and Debit card. Bank acccount is selected. A field below has placholder text that reads: Search for your bank. Several bank logos appear below the search field in a grid layout. The first column contains the following logos: Chase, US Bank, USAA, M&T Bank. The second column contains: Bank of America, TD Bank, Fifth Third Bank, Citizens Bank. The third column contains: Wells Fargo, Capital One, Huntington, Silicon Valley Bank. Below the grid of bank logos is purple text that reads: Enter bank details manually instead with a right-pointing arrow. A purple button at the bottom of the form reads: Next with a right-pointing arrow."
                            />
                        </p>
                        <p>
                            Search for your bank or click "Enter bank details
                            manually instead." Follow the resulting prompts to
                            connect Stripe to your bank account.
                        </p>
                        <p>Or, you can link Stripe to a debit card:</p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403910366487/postPlusPayoutCard.png"
                                alt="It's the same page as the previous screenshot, only Debit card is selected instead of Bank account. The form has changed, and now shows a section labeled Card number with the placeholder text: 1234 1234 1234 1234. The next section is labeled Expiration date with the placeholder text: MM/YY. At the bottom of the form is an inactive, light purple button that reads Save in white text."
                            />
                        </p>
                        <p>
                            Enter the card number and expiration date, then
                            click "Save." On the next page, you'll review your
                            information.
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403904026647/postPlusReviewDetails.png"
                                alt="A screenshot of the next step in the Stripe sign up flow. The left side of the page is the same as the previous screenshots. The title of the form on the right reads: Let's review your details. Smaller text below the title reads: You're almost ready to get started with Tumblr. Please double-check that this information is correct. The first section is labeled BUSINESS DETAILS. Within the section is a light gray box. There is a pencil icon in the top right corner of the box. The first line reads: Your business. Below that is the URL: https://tumblr.com/creator/yoururl. The next line reads: Other information provided. Below that is: Phone, Industry. The next section is labeled MANAGEMENT AND OWNERSHIP. The gray box in this section contains a pencil icon in the top right corner. Left-aligned text reads: Miles O'Brien. Below that: Account representative. On the next line: chiefobrien@starfleet.com. Next line: Born on September 1, 2328. Next line: 2372 Argratha St. Next line: San Francisco, CA 94110 US. Next line: Other information provided. Next line: SSN, Phone. The next section is labeled: PAYOUT DETAILS. The gray box contains a Visa logo on the left. To the right of the logo reads: Visa, USD, and there's a green check mark. Below this text is a series of 12 dots, then 0000. On the right side of the gray box is a pencil icon. Small text a the end of the form reads: By clicking Submit, you agree to the Connected Account Agreement (purple text), to receiving autodialed text messages from Stripe, and you certify that the information you have provided to Stripe is complete and correct. Stripe, Inc. is a registered ISO of Wells Fargo Bank, N.A., Concord, CA. Below this text is a purple button that reads: Submit."
                            />
                        </p>
                        <p>
                            Make sure everything is correct, then click
                            "Submit." You'll be redirected back to the Post+
                            settings page, where you can finish setting up your
                            creator profile.
                        </p>
                        <p>
                            <strong>Note:</strong> You may see your status as
                            "pending" when you're redirected back to your Post+
                            settings. This just means that Stripe is reviewing
                            your details. In some cases, Stripe may request
                            additional information from you to complete the
                            verification process. If your status remains
                            "pending" for 24 hours, please{' '}
                            <a href="https://www.tumblr.com/support">
                                reach out to Support
                            </a>
                            .
                        </p>
                        <h4 id="updating-details">
                            Updating Your Information in Stripe
                        </h4>
                        <p>
                            If your legal name, address, phone number, or email
                            address changes, you can update your details in
                            Stripe. You can also change your payout details.
                            Here's how:
                        </p>
                        <ul>
                            <li>Go to your Post+ settings.</li>
                            <li>
                                Next to "Personal and deposit details," click
                                "Edit." This will take you to Stripe.
                            </li>
                            <li>Click the "Account" tab.</li>
                            <li>Make your desired changes.</li>
                        </ul>
                        <p>
                            <strong>
                                Some information cannot be updated once
                                verification begins on Stripe's end
                            </strong>
                            . If you're unable to make a change, please{' '}
                            <a href="https://support.stripe.com/contact/email">
                                contact Stripe Support
                            </a>
                            .
                        </p>
                        <h3 id="set-pricing">Set Pricing</h3>
                        <p>
                            You can choose from four price levels:{' '}
                            <strong>$1.99/month</strong>,{' '}
                            <strong>$3.99/month</strong>,{' '}
                            <strong>$5.99/month</strong>, or{' '}
                            <strong>$9.99/month.</strong>
                        </p>
                        <p>
                            <strong>Note:</strong> These prices reflect the cost
                            to your supporters, not your payout. You can learn
                            more about fees and creator payout{' '}
                            <a href="/hc/articles/4402764366615#fees">here</a>.
                        </p>
                        <p>
                            Use the slider to select the price level you'd like
                            to set.{' '}
                            <strong>
                                Once you get your first paying supporter, the
                                price level cannot be changed.
                            </strong>
                        </p>
                        <h3 id="creator-description">
                            Enter a Creator Profile Description
                        </h3>
                        <p>
                            The creator profile description is separate from
                            your blog description and will show up on your
                            creator profile page, and wherever folks start the
                            process of becoming a supporter.
                        </p>
                        <p>
                            It's where you can tell supporters (and potential
                            supporters) a little bit about yourself. What you
                            put here is totally up to you, but keep in mind that
                            there's a 1,000-character limit. You can edit your
                            creator profile description anytime, including from
                            the app.
                        </p>
                        <p>
                            <strong>Note:</strong> Text formatting and media
                            aren't supported in the creator profile description
                            just yet, but we're working on it.
                        </p>
                        <h3 id="perks">Select Your Perks</h3>
                        <p>
                            You can add up to five perks to your creator profile
                            to give potential supporters an idea of what they
                            can expect if they buy a subscription from you.
                            Select one of our suggested perks, or create your
                            own*:
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409132648215/perks.gif"
                                alt="A GIF of the Post+ perks prompt. At the top is a field where you can type your own perks. The placeholder text reads Enter up to 5 perks. Below are suggested perks in gray button form. The text reads: Creative Prompts, Process Videos, Sneak Peeks, Social Shout Outs, and Bonus Content. Each perk also has a plus icon. In the bottom right corner is a gray, inactive button that reads Done. The user types their own perk in the top field: star trek screenshots. The user then clicks Social Shout Outs and it is added to the top section. Perks in this section are blue. The Done button becomes active (blue). When they enter it, it becomes a blue button. The GIF plays in a loop."
                            />
                        </p>
                        <p>
                            *When creating your own perk, there's a limit of 64
                            characters.
                        </p>
                        <p>
                            You can come back to this screen later to update the
                            perks you offer, and you can edit your perks from
                            the app as well.
                        </p>
                        <p>
                            Having trouble deciding what perks to offer your
                            supporters? Try asking your followers. If their
                            suggestions are feasible for you, consider adding
                            them as perks!
                        </p>
                        <h2 id="creator-responsibilities">
                            Understand Your Responsibilities as a Post+ Creator
                        </h2>
                        <p>
                            Post+ is designed to be a primarily peer-to-peer
                            tool. You're not working for Tumblr; we're providing
                            you with a tool to create content for your
                            supporters. Therefore, managing your supporters is
                            mostly up to you.
                        </p>
                        <h3 id="providing-content">
                            Providing Content and Delivering on Perks
                        </h3>
                        <p>
                            When setting up your creator profile, you'll{' '}
                            <a href="/hc/articles/4402764366615#perks">
                                select some perks
                            </a>{' '}
                            that your supporters can expect to receive in
                            addition to your free posts. In the event that you
                            stop delivering on these perks, or if you stop
                            posting altogether for whatever reason, Tumblr can't
                            hold you responsible or turn off Post+ on your blog
                            (although we{' '}
                            <a href="https://www.tumblr.com/policy/terms-of-service">
                                reserve the right to do so
                            </a>
                            ). That said, your supporters won't be too happy.
                            They will likely cancel their subscription.
                        </p>
                        <p>
                            If you need to take a break from posting, we
                            encourage you to give your supporters a heads up.
                        </p>
                        <h2 id="payments">Payments</h2>
                        <h3 id="fees">Fees</h3>
                        <p>
                            The fees involved will depend on how the
                            subscription was purchased. Tumblr's fee is 5%
                            regardless of the purchase method. Additional fees
                            are controlled by our payment processors.
                        </p>
                        <p>
                            <strong>
                                If the subscription was purchased in the iOS app
                            </strong>
                            , you will incur a fee of 30%* (set by Apple) in
                            addition to Tumblr's fee of 5%.
                        </p>
                        <p>
                            *Purchases made in certain regions will have higher
                            Apple fees.
                        </p>
                        <p>
                            <strong>Example:</strong> A supporter in the United
                            States signed up for a $3.99/month subscription via
                            the iOS app.
                        </p>
                        <ul>
                            <li>Apple’s fees are $3.99 * 30% = $1.20.</li>
                            <li>Tumblr fees are $3.99 * 5% = $0.20.</li>
                            <li>
                                You, the creator, receive $3.99 – $1.20 – $0.20
                                = $2.59.
                            </li>
                        </ul>
                        <p>
                            <strong>
                                If the subscription was purchased in the Android
                                app or a web browser
                            </strong>
                            , you will incur a transaction fee of 2.9% + $0.30
                            per transaction (set by Stripe, our payment
                            processor), in addition to Tumblr's fee of 5%.
                            There's also an additional 1% fee for transactions
                            paid using a card issued outside the US, and a 1%
                            fee for conversion of currencies other than USD.
                        </p>
                        <p>
                            <strong>Example:</strong> A supporter in the United
                            States signed up for a $3.99/month subscription via
                            a web browser.
                        </p>
                        <ul>
                            <li>
                                Transaction fees are $3.99 * 2.9% = $0.12 +
                                $0.30 = $0.42.
                            </li>
                            <li>Tumblr fees are $3.99 * 5% = $0.20.</li>
                            <li>
                                You, the creator, receive $3.99 - $0.42 - $0.20
                                = $3.37.
                            </li>
                        </ul>
                        <h3 id="payout-frequency">Payout Frequency</h3>
                        <p>
                            Your payout frequency is dependent on the method
                            your supporters use to purchase their subscription.
                            You can expect frequent payouts, especially if a lot
                            of your supporters are subscribing via the web or
                            the Tumblr Android app.
                        </p>
                        <p>
                            For supporters who paid on the{' '}
                            <strong>web or an Android device</strong>, payment
                            to you will occur within approximately 7 days after
                            the supporter's payment. Stripe will send you an
                            email and a text message when your{' '}
                            <em>first payment</em> has been sent. They'll send
                            an email for subsequent payouts.
                        </p>
                        <p>
                            For supporters who paid on an Apple device in the
                            Tumblr app using{' '}
                            <strong>Apple Subscriptions</strong>, a deposit into
                            your account will occur once a month. Your earnings
                            are calculated on a monthly basis, with payment
                            typically occurring within approximately 50 days
                            after month end.
                        </p>
                        <h2 id="managing-supporters">
                            Managing Your Supporters
                        </h2>
                        <h3 id="issues-and-refunds">
                            Handling Transaction Issues and Refund Requests
                        </h3>
                        <p>
                            If someone is having trouble becoming a supporter,
                            or if someone contacts you to request a refund,
                            direct them to{' '}
                            <a href="https://support.apple.com/HT204084">
                                Apple Support
                            </a>{' '}
                            (if they purchased their subscription in the iOS
                            app) or{' '}
                            <a href="https://www.tumblr.com/support">
                                Tumblr Support
                            </a>{' '}
                            (if they purchased their subscription in the Android
                            app or on the web).
                        </p>
                        <h3 id="blocking-supporters">Blocking a Supporter</h3>
                        <p>
                            You can block an active paying supporter just like
                            any other blog. Blocking a supporter will prevent
                            them from accessing your paywalled content in
                            addition to all other actions associated with{' '}
                            <a href="/hc/articles/231877648-Blocking-users">
                                blocking a blog
                            </a>
                            .
                        </p>
                        <p>Some things to note:</p>
                        <ul>
                            <li>
                                Their subscription will be canceled, and they
                                will receive an email notification informing
                                them of the cancellation. We don't tell them
                                that you've blocked them (though they may be
                                able to come to that conclusion on their own).
                            </li>
                            <li>Their payment(s) will not be refunded.</li>
                            <li>
                                If you choose to unblock them, they will not be
                                automatically resubscribed to your Post+
                                content.
                            </li>
                        </ul>
                        <p>
                            Anyone you had blocked prior to enabling Post+ on
                            your blog will remain blocked, and they will not be
                            able to become a supporter.
                        </p>
                        <h2 id="creating-plus-posts">Creating Post+ Content</h2>
                        <p>
                            By default, your posts will be visible to anyone.
                            +Posts (paywalled posts) will show only a teaser and
                            an overlay to folks who haven't become supporters.
                            Your supporters will be able to access the full
                            post.
                        </p>
                        <p>
                            One thing to note: +Posts must use the{' '}
                            <a href="/hc/articles/360010901913">
                                Neue Post Format (NPF)
                            </a>
                            .
                        </p>
                        <h3 id="plus-post-web">Making a +Post on Web</h3>
                        <p>
                            To make a +Post, open a new post and make sure that
                            you've{' '}
                            <a href="/hc/articles/360010901913#webnpf">
                                enabled the beta post editor
                            </a>
                            .
                        </p>
                        <p>
                            Next, click the "Anyone" button next to the gear
                            wheel icon in the top right. In the dropdown, select
                            "Supporters only."
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403904089879/postPlusCreationWebOne.png"
                                alt="A screenshot of the post form on web. In the top left is the blog avatar, which is an image of Miles O'Brien. The blog name is silvercoins. The post form is empty, showing only placeholder text which reads Title in the title field and Go ahead, put anything just below. #add tags appears in the tag field. There's a close button in the bottom left, and an inactive Post now button with an arrow in the bottom right. In the top right is the gear wheel icon. To the left of the gear wheel is a button that reads Anyone. The user has clicked this button to expand a dropdown. The dialogue reads Who can see your post? The options below are Anyone (Anyone on or off Tumblr) and Supporters only (Your Post+ subscribers). Anyone is currently selected."
                                width={600}
                                height={438}
                            />
                        </p>
                        <p>This will insert a divider in the post:</p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403904187799/postPlusCreationWebTwo.png"
                                alt="The same post form as the previous image, only the user has selected Supporters only instead of Anyone from the Who can see your post dialogue. Doing so has affected the post body. There is a placeholder that reads Title in the title field. Below that, the placeholder text reads Add a public teaser of your +Post. Below that prompt are two purple lines extending from either side of the post. In between the two purple lines are two arrows pointing up and the word Teaser. Below this is another placeholder that reads and save the good stuff for supporters here. The content block icons appear to the right of that placeholder text: a red camera icon, a pink video icon, a blue GIF icon, a purple audio icon, a green link icon, and a gray ellipsis icon to add a read more."
                                width={599}
                                height={428}
                            />
                        </p>
                        <p>
                            Anything above the teaser line will be visible to
                            anyone.{' '}
                            <strong>
                                You can have a maximum of 300 characters of text
                                and one media item (audio, link, photo, GIF,
                                video) above the teaser line
                            </strong>
                            . Only supporters will be able to see what you put
                            below it.
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403904192023/postPlusCreationWebThree.png"
                                alt="The same post form as the previous image, only the user has added content to the post. The title reads Hey, an update. Below that, the teaser text reads Some of my best work, honestly. Below that are two purple lines extending from either side of the post. In between the two purple lines are two arrows pointing up and the word Teaser. Below this, the text reads Alright friends, check out this post. Below this text is a grid of four identical images of Guinan from Star Trek. Text below reads That's right. The Post now button is now active."
                                width={600}
                                height={829}
                            />
                        </p>
                        <p>
                            When you publish your +Post, you'll see the entire
                            thing. However, non-supporters will see an overlay
                            concealing the content below the teaser.
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4407162382615/postPlusOverlayWebUpdated.png"
                                alt="A screenshot of a +Post on web. The upper right corner shows a lock icon with a plus sign in the middle. To the right of that is the meatballs icon. The title of the post reads Hey, an update. The teaser below reads Some of my best work, honestly. The +Post overlay conceals the rest of the post. There's a yellow icon with a star and in large black text: For Supporters. Below that, in smaller black font: Support silvercoins by subscribing to their +Posts. As a supporter you'll get access to exclusive content and perks. There's a black button below the text that reads Show your Support. In the bottom left corner in black is the text: 2 notes. On the bottom right are following icons: share, reply, reblog, and like."
                            />
                        </p>
                        <p>
                            On the blog network, +Posts show a{' '}
                            <strong>read more</strong> instead of the +Post
                            overlay. Clicking "Keep reading" will open the post
                            in the creator profile.
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4407162409239/postPlusBlogNetwork.gif"
                                alt="A GIF showing a +Post on silvercoins.tumblr.com in a web browser. silvercoins has a white background with yellow accents and black body text. The first post reads: y'all are going to want to check this one out, then has a link that says Keep reading. The user clicks Keep reading and is redirected to silvercoins's creator profile. The background of this page is Tumblr blue. The posts are in a single center-left column. The first post in the column is the one that the user had clicked. There's now a +Post overlay on the post."
                                width={696}
                                height={451}
                            />
                        </p>
                        <h3 id="plus-post-app">Making a +Post in the App</h3>
                        <p>
                            To make a +Post, open a new post and tap the
                            "Anyone" button in the top right. In the resulting
                            pop-up, tap "Supporters only."
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403904208023/plustPostios.gif"
                                alt="An animated GIF of an empty post form in the iOS app. At the top left is an X. At the top right is the Post button, along with the meatballs icon. Below the X is the blogname (silvercoins). Below the Post button and the meatballs icon is a button that reads Anyone. As the GIF progresses, the user taps this button and changes it to Supporters via a pop up at the bottom of the screen that reads: Who can see your post? The options are: Anyone (anyone on or off Tumblr) and Supporters only (Your Post+ subscribers). The menu disappears when the user taps Supporters only. This also inserts a purple line in the post with the word Teaser in the middle. The placeholder text changes from Add something, if you'd like to: Add a public teaser of your post. The placeholder text below the teaser reads: and the good stuff for supporters here."
                                width={337}
                                height={700}
                            />
                        </p>
                        <p>
                            This will insert a divider in the post. Anything
                            above the teaser line will be visible to anyone.{' '}
                            <strong>
                                You can have a maximum of 300 characters of text
                                and one media item (audio, link, photo, GIF,
                                video) above the teaser line
                            </strong>
                            . Only supporters will be able to see what you put
                            below it.
                        </p>
                        <p>
                            When you publish your +Post, you'll see the entire
                            thing (as will your supporters). Anyone else will
                            only see the content you've put above the teaser,
                            along with an overlay:
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4407590748439/silvercoinsBlogIOS.jpg"
                                alt="A screenshot of the blog silvercoins in the iOS app. The background is white. At the top left of the screen is a yellow arrow pointing left. To the right of the arrow is the blogname (silvercoins) in yellow text. To the right of that is the search icon, followed by the messaging icon (which has a green dot), the ask/submit icon, and the follow button, all yellow. The avatar is an image of Miles O'Brien from the waist up. He is in his Starfleet uniform, smiling and looking directly at the camera. The background is transparent. Large yellow text below the avatar reads: chief. Smaller yellow text below that reads: i've dislocated my shoulder again. A wide yellow button below that reads Support in white font. The blog's posts are below. The first one shows the blog avatar on the left, with silvercoins in black font to the right of that. There's a blue icon with a plus sign to the right of the blog name. On the right side of the post is a light gray lock icon with a plus sign. To the right of that is the meatballs icon. There's a thin black horizontal line, followed by the post content. Small black text reads: y'all are going to want to check this one out. Large yellow text below that reads: For Supporters. Gray text below reads: Support silvercoins (in yellow) by subscribing to their +Posts. As a supporter you'll get access to exclusive content and perks. A yellow button with white text below reads: Show your Support. The share, reply, reblog, and like icons (all black) are below. At the very bottom of the screen are the following icons (from left to right): The house icon (dashboard), magnifying glass icon (search and explore), the pencil icon (to make a new post), the smiley face icon (activity and messaging), and the account icon."
                                width={343}
                                height={701}
                            />
                        </p>
                        <h3 id="existing-posts">
                            Adding a Paywall to an Existing Post
                        </h3>
                        <p>
                            One bit of feedback we’ve heard from our beta
                            testers is that it’s hard to come up with new
                            content. Several folks said they felt pressured to
                            churn out a lot of new stuff for those who signed up
                            as supporters. To alleviate this pressure, we’re
                            giving creators the option to place an existing post
                            on their blog behind a paywall.
                        </p>
                        <p>Some things to consider:</p>
                        <ul>
                            <li>
                                Folks who are not active paying supporters will
                                no longer be able to view the content behind the
                                paywall, including reblogs of that post.
                            </li>
                            <li>
                                Paywalls can only be added to{' '}
                                <a href="/hc/articles/360010901913">
                                    NPF posts
                                </a>
                                , not legacy posts.
                            </li>
                            <li>
                                You cannot add a paywall to a reblog, only
                                original posts.
                            </li>
                        </ul>
                        <p>
                            To add a paywall to an existing post, click the
                            pencil icon on the post in question, then click
                            "Anyone" at the top. In the dropdown, select
                            "Supporters only." Add a teaser, if you'd like, then
                            save your changes.
                        </p>
                    </div>
                    <div className="article-attachments">
                        <ul className="attachments"></ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
