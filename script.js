const processStages = [
    {
        title: "Enquire",
        status: "Stage 1 - Enquiry",
        summary: "Start with a short enquiry so the team can understand the property, project type and first scope.",
        next: "Elite will review the enquiry, then ask for consultation photos or arrange the next conversation.",
        timing: "First reply within 1-2 working days",
        primaryCta: "Start Enquiry",
        whatsappTemplate: "{projectLine}\n\nNew Project Enquiry\nName: {name}\nAddress: {address}\nPhone: {phone}\nProject Type: {projectType}\nShort Summary: {summary}",
        optionalFields: [
            { id: "name", label: "Name", type: "text", required: true },
            { id: "address", label: "Address", type: "text", required: true },
            { id: "phone", label: "Phone number optional", type: "tel" },
            { id: "projectType", label: "Project type", type: "select" },
            { id: "summary", label: "Short project summary", type: "textarea" }
        ],
        checklist: [
            "Add your name and project address.",
            "Choose the closest project type.",
            "Keep the first summary short and practical."
        ],
        ctaHref: "process.html#stage-details",
        progress: 14,
        anchor: "enquire"
    },
    {
        title: "Consult",
        status: "Stage 2 - Consultation",
        summary: "Send useful photos and notes so the team can ask better questions before quoting.",
        next: "If anything is missing, Elite can ask for it in the same WhatsApp thread.",
        timing: "Usually arranged the same week where possible",
        primaryCta: "Send Consultation Photos via WhatsApp",
        whatsappTemplate: "{projectLine}\n\nConsultation Photos / Details\nProject Type: {projectType}\nI have attached photos for:\n- Current area: {currentArea}\n- Access: {access}\n- Key details: {keyDetails}\n- Optional proposal/inspiration images: {optionalImages}\n\nNotes / questions:\n{notes}",
        optionalFields: [
            { id: "currentArea", label: "Current area", type: "text", placeholder: "Yes / partly / not yet" },
            { id: "access", label: "Access", type: "text", placeholder: "Yes / partly / not yet" },
            { id: "keyDetails", label: "Key details", type: "text", placeholder: "Drains, levels, services, existing walls..." },
            { id: "optionalImages", label: "Optional proposal/inspiration images", type: "text", placeholder: "Yes / no / not available" },
            { id: "notes", label: "Notes / questions", type: "textarea" }
        ],
        checklist: [
            "Attach the photos requested below before sending.",
            "Send what you have. If something is missing, we can ask for it during consultation.",
            "Photos are not automatically transferred by this website."
        ],
        ctaHref: "process.html#stage-details",
        progress: 29,
        anchor: "consult"
    },
    {
        title: "Quote",
        status: "Stage 3 - Quote",
        summary: "Review the quote, ask questions, request a scope change or accept it in principle.",
        next: "Once the scope is understood, the project can move into preparation and start-date planning.",
        timing: "3-5 working days after details are complete",
        primaryCta: "Send Quote Update",
        whatsappTemplate: "{projectLine}\n\nQuote Stage\nI would like to:\n{quoteOption}\n\nQuote reference if known:\n{quoteReference}\nQuestion / change / confirmation:\n{quoteDetails}",
        optionalFields: [
            { id: "quoteOption", label: "I would like to", type: "choice", options: ["Confirm quote received", "Ask a quote question", "Request a scope change", "Accept quote in principle"] },
            { id: "quoteReference", label: "Quote reference if known", type: "text" },
            { id: "quoteDetails", label: "Question / change / confirmation", type: "textarea" }
        ],
        checklist: [
            "Check the scope, exclusions and customer choices.",
            "Ask questions in WhatsApp so the thread stays together.",
            "Use scope change if the work you want has changed."
        ],
        ctaHref: "process.html#stage-details",
        progress: 43,
        anchor: "quote"
    },
    {
        title: "Preparation",
        status: "Stage 4 - Preparation",
        summary: "Confirm the practical details before work starts: access, choices, deposit, permissions, materials and dates.",
        next: "When the key items are ready, Elite can confirm the build start plan.",
        timing: "Confirmed before the agreed start date",
        primaryCta: "Update Preparation Details",
        whatsappTemplate: "{projectLine}\n\nPreparation Stage Update\nCurrent topic:\n{preparationTopics}\n\nDetails:\n{details}",
        optionalFields: [
            { id: "preparationTopics", label: "Current topic", type: "choice", options: ["Deposit", "Planning / building control", "Materials", "Access", "Start date", "Customer choices", "Other"] },
            { id: "details", label: "Details", type: "textarea" }
        ],
        checklist: [
            "Site assessment and access checks.",
            "Ordering materials and checking resource availability.",
            "Initial deposit, planning or building control status.",
            "Customer choices required before work starts."
        ],
        ctaHref: "process.html#stage-details",
        progress: 57,
        anchor: "preparation"
    },
    {
        title: "Build Commencement",
        status: "Stage 5 - Build Commencement",
        summary: "Work has started or is due to start, with key updates and customer decisions handled through WhatsApp.",
        next: "Confirm decisions quickly so the build can keep moving where your approval is needed.",
        timing: "Programme depends on project scope",
        primaryCta: "Send Build Commencement Update",
        whatsappTemplate: "{projectLine}\n\nBuild Commencement Stage\nI am contacting you about:\n{buildOption}\n\nDetails:\n{details}",
        optionalFields: [
            { id: "buildOption", label: "I am contacting you about", type: "choice", options: ["Ask for build update", "Confirm a decision", "Raise a concern", "Confirm staged payment", "Report access issue", "Request change during build"] },
            { id: "details", label: "Details", type: "textarea" }
        ],
        checklist: [
            "Some decisions may pause the build until customer confirmation is received.",
            "Materials, weather, resource availability, access or hidden issues can affect timing.",
            "Partial or staged payments may be required depending on the agreed scope."
        ],
        ctaHref: "process.html#stage-details",
        progress: 71,
        anchor: "build"
    },
    {
        title: "Walkthrough",
        status: "Stage 6 - Walkthrough",
        summary: "Use the walkthrough to list minor issues, finish concerns or final adjustments before completion.",
        next: "Elite reviews the blue tape feedback and confirms what will be resolved before handover.",
        timing: "Near completion",
        primaryCta: "Send Blue Tape Feedback via WhatsApp",
        whatsappTemplate: "{projectLine}\n\nBlue Tape / Walkthrough Feedback\nArea: {area}\nIssue Type: {issueType}\nDescription: {description}\nPhoto attached: {photoAttached}\n\nPlease review this before final completion.",
        optionalFields: [
            { id: "area", label: "Room / area", type: "text" },
            { id: "issueType", label: "Issue type", type: "select", options: ["Paint / finish", "Joinery", "Fitting", "Cleaning", "Damage", "Missing item", "Other"] },
            { id: "description", label: "Description", type: "textarea" },
            { id: "photoAttached", label: "Photo attached", type: "choice", options: ["Yes", "No"] }
        ],
        checklist: [
            "Issues can be raised during the build.",
            "The final walkthrough is the last structured review before completion.",
            "Blue tape simply means marking or listing small snagging items clearly."
        ],
        ctaHref: "process.html#stage-details",
        progress: 86,
        anchor: "walkthrough"
    },
    {
        title: "Completion",
        status: "Stage 7 - Completion",
        summary: "Confirm handover, final payment, aftercare questions, customer satisfaction and image permission.",
        next: "Elite can close the project cleanly and keep aftercare information in the same thread.",
        timing: "Final handover",
        primaryCta: "Send Completion Update",
        whatsappTemplate: "{projectLine}\n\nCompletion Stage\nI would like to:\n{completionOption}\n\nFinal comments:\n{comments}\nPortfolio image permission: {portfolioPermission}",
        optionalFields: [
            { id: "completionOption", label: "I would like to", type: "choice", options: ["Confirm completion", "Send final payment query", "Send aftercare/warranty question", "Give permission for portfolio images", "Leave feedback/testimonial"] },
            { id: "comments", label: "Final comments", type: "textarea" },
            { id: "portfolioPermission", label: "Portfolio image permission", type: "choice", options: ["Yes", "No", "Please ask me first"] }
        ],
        checklist: [
            "Final images for portfolio if appropriate.",
            "Final payment and handover confirmation.",
            "Warranty, aftercare and customer feedback."
        ],
        ctaHref: "process.html#stage-details",
        progress: 100,
        anchor: "completion"
    }
];

const WHATSAPP_NUMBER = "447454243502";
const PROJECT_STORAGE_KEY = "elitePortalProjectDetails";

const projectTypeOptions = [
    "Extension",
    "Renovation",
    "Kitchen",
    "Bathroom",
    "Conversion",
    "Groundworks",
    "Landscaping",
    "New Build",
    "Other"
];

const photoGuides = {
    extension: {
        title: "Extension photo checklist",
        summary: "Send what you have. If something is missing, we can ask for it during consultation.",
        upload: "Outside space, access and levels",
        items: [
            "Current outside space where the extension may be built",
            "Access route to the garden or side of the property",
            "Ground levels, drains, manholes or obvious slopes",
            "Existing walls the extension may connect to",
            "Proposal drawings or inspiration images if available - optional, not mandatory"
        ]
    },
    renovation: {
        title: "Renovation photo checklist",
        summary: "Send the clearest view of the rooms and any areas that are changing. We can ask for more detail if needed.",
        upload: "Rooms, details and ideas",
        items: [
            "Wide photo of each room or area being renovated",
            "Close-up photos of problem areas, damage or existing finishes",
            "Services, boilers, fuse boards, radiators or pipework if visible",
            "Any drawings, measurements or inspiration images if available"
        ]
    },
    kitchen: {
        title: "Kitchen renovation photo checklist",
        summary: "Send what you have. If something is missing, we can ask for it during consultation.",
        upload: "Kitchen corners and services",
        items: [
            "Photo from each corner of the existing kitchen",
            "Current appliances, boiler, fuse board or services if visible",
            "Flooring, ceiling and lighting areas",
            "Any inspiration images or preferred style if available",
            "Rough dimensions if known"
        ]
    },
    bathroom: {
        title: "Bathroom photo checklist",
        summary: "Send what you have. If something is missing, we can ask for it during consultation.",
        upload: "Bathroom corners and services",
        items: [
            "Photo from each corner of the room",
            "Current shower/bath/toilet/sink positions",
            "Window, extractor, boxing-in and pipework if visible",
            "Preferred style or finish if known"
        ]
    },
    conversion: {
        title: "Conversion photo checklist",
        summary: "For garages, lofts or outbuildings, we need to see access, structure, openings and current condition.",
        upload: "Access, structure and condition",
        items: [
            "Wide photos inside and outside the space",
            "Photos of access, roof, floor, walls and existing openings",
            "Any rough dimensions, head heights or known restrictions",
            "Drawings, ideas or inspiration if available"
        ]
    },
    groundworks: {
        title: "Groundworks photo checklist",
        summary: "Send what you have. If something is missing, we can ask for it during consultation.",
        upload: "Area, access, drains and levels",
        items: [
            "Wide image of the area",
            "Access for machinery",
            "Boundaries, levels, drains, manholes and slopes",
            "Any known services or restrictions"
        ]
    },
    landscaping: {
        title: "Landscaping photo checklist",
        summary: "Send what you have. If something is missing, we can ask for it during consultation.",
        upload: "Garden, access and levels",
        items: [
            "Wide photos from the house looking out",
            "Wide photos from the rear boundary looking back",
            "Access route",
            "Level changes, steps, drains, retaining walls",
            "Preferred finish or inspiration if available"
        ]
    },
    newbuild: {
        title: "New build photo checklist",
        summary: "Send what you have. If something is missing, we can ask for it during consultation.",
        upload: "Plot, access and plans",
        items: [
            "Plot photos",
            "Access route",
            "Boundaries",
            "Planning drawings, surveys or site plans if available",
            "Services or known ground conditions"
        ]
    },
    other: {
        title: "General photo checklist",
        summary: "Send what you have. If something is missing, we can ask for it during consultation.",
        upload: "Area, close-ups and ideas",
        items: [
            "Wide photos of the area",
            "Close-up photos of the problem or proposed work",
            "Any drawings, ideas or inspiration if available"
        ]
    }
};

let loaderDone = false;
let pageLoaded = false;
const loaderStartedAt = Date.now();

const setLoaded = () => {
    if (loaderDone) return;
    loaderDone = true;
    document.body.classList.add("is-loaded");
    document.querySelectorAll(".site-loader").forEach((loader) => {
        loader.setAttribute("aria-hidden", "true");
        window.setTimeout(() => {
            loader.setAttribute("hidden", "");
        }, 820);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    setupLoader();
    setupHeader();
    setupMobileMenu();
    setupSmoothAnchors();
    setupPortals();
    setupPhotoGuidance();
    setupImageFallbacks();
    setupScrollReveals();
    setupProjectModal();
    setupTeamModal();
    setupFloatingEnquiry();
});

function setupLoader() {
    const finishWhenReady = () => {
        if (!pageLoaded) return;
        const elapsed = Date.now() - loaderStartedAt;
        window.setTimeout(setLoaded, Math.max(0, 1800 - elapsed));
    };

    window.addEventListener("load", () => {
        pageLoaded = true;
        finishWhenReady();
    }, { once: true });

    window.setTimeout(() => {
        pageLoaded = true;
        finishWhenReady();
    }, 2600);
}

function setupHeader() {
    const header = document.getElementById("siteHeader");
    if (!header) return;

    const update = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
}

function setupMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("mobileMenu");
    if (!toggle || !menu) return;

    const closeMenu = () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });
}

function setupSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        if (anchor.matches("[data-project-card]")) return;

        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

function setupPortals() {
    document.querySelectorAll("[data-portal]").forEach((root) => {
        const stageButtons = Array.from(root.querySelectorAll("[data-stage]"));
        if (!stageButtons.length) return;

        let activeStage = clampStage(Number(root.dataset.defaultStage || 0));
        const isClientPortal = root.matches("[data-client-portal]");

        const updateStage = (stageIndex, shouldScroll) => {
            activeStage = clampStage(stageIndex);
            const stage = processStages[activeStage] || processStages[0];

            stageButtons.forEach((button) => {
                const buttonStage = Number(button.dataset.stage);
                const isActive = buttonStage === activeStage;
                button.classList.toggle("is-active", isActive);
                button.classList.toggle("is-complete", buttonStage < activeStage);
                button.classList.toggle("is-future", buttonStage > activeStage);
                button.setAttribute("aria-pressed", String(isActive));
                if (isActive) {
                    button.setAttribute("aria-current", "step");
                } else {
                    button.removeAttribute("aria-current");
                }
                button.dataset.state = buttonStage < activeStage ? "complete" : isActive ? "active" : "future";
            });

            root.querySelectorAll("[data-progress-fill]").forEach((bar) => {
                bar.style.width = `${stage.progress}%`;
            });

            setText(root, "[data-portal-stage-number]", String(activeStage + 1).padStart(2, "0"));
            setText(root, "[data-portal-step-text]", `${activeStage + 1} of ${processStages.length}`);
            setText(root, "[data-portal-status]", stage.status);
            setText(root, "[data-portal-title]", stage.title);
            setText(root, "[data-portal-summary]", stage.summary);
            setText(root, "[data-portal-timing]", stage.timing);
            setText(root, "[data-portal-next]", stage.next);
            setText(root, "[data-portal-progress-text]", `${stage.progress}% complete`);
            setText(root, "[data-readiness-score]", `${stage.progress}%`);
            setText(root, "[data-helper-title]", getHelperTitle(activeStage));
            renderList(root, "[data-portal-checklist]", stage.checklist || []);

            root.querySelectorAll("[data-portal-cta]").forEach((link) => {
                link.textContent = stage.primaryCta;
                link.setAttribute("href", stage.ctaHref || "process.html#stage-details");
            });

            root.querySelectorAll(".stage-detail").forEach((detail) => {
                const detailStageIndex = processStages.findIndex((item) => item.anchor === detail.id);
                if (detailStageIndex < 0) return;
                detail.classList.toggle("is-active", detailStageIndex === activeStage);
                detail.classList.toggle("is-complete", detailStageIndex < activeStage);
                detail.classList.toggle("is-future", detailStageIndex > activeStage);
            });

            if (isClientPortal) {
                renderProjectSummary(root);
                renderClientPortalStage(root, activeStage);
            }

            if (shouldScroll) {
                const target = document.getElementById(stage.anchor);
                if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        };

        if (isClientPortal) {
            setupProjectDetailsForm(root, () => updateStage(activeStage, false));
        }

        stageButtons.forEach((button) => {
            button.addEventListener("click", () => {
                updateStage(Number(button.dataset.stage), button.classList.contains("process-nav-button"));
            });
        });

        updateStage(activeStage, false);
    });
}

function clampStage(stageIndex) {
    if (!Number.isFinite(stageIndex)) return 0;
    return Math.min(Math.max(stageIndex, 0), processStages.length - 1);
}

function getHelperTitle(stageIndex) {
    return [
        "Start with the basics.",
        "Send useful photos.",
        "Keep the quote conversation clear.",
        "Confirm the practical items.",
        "Keep build decisions moving.",
        "List final snagging clearly.",
        "Close the project cleanly."
    ][stageIndex] || "Send the right update.";
}

function getDefaultProjectDetails() {
    return {
        name: "",
        address: "",
        phone: "",
        projectType: "",
        summary: ""
    };
}

function getProjectDetails() {
    try {
        const stored = JSON.parse(localStorage.getItem(PROJECT_STORAGE_KEY) || "{}");
        return { ...getDefaultProjectDetails(), ...stored };
    } catch (error) {
        return getDefaultProjectDetails();
    }
}

function saveProjectDetails(details) {
    const cleanDetails = { ...getDefaultProjectDetails(), ...details };
    try {
        localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(cleanDetails));
    } catch (error) {
        // If storage is unavailable, WhatsApp still works with the current form values.
    }
}

function getProjectLine(details = getProjectDetails()) {
    const name = details.name?.trim() || "[Name]";
    const address = details.address?.trim() || "[Address]";
    return `${name} - ${address}`;
}

function setupProjectDetailsForm(root, onChange) {
    const form = root.querySelector("[data-project-details-form]");
    const toggle = root.querySelector("[data-toggle-project-details]");
    const cancel = root.querySelector("[data-cancel-project-details]");
    if (!form) return;

    const showForm = (shouldShow) => {
        form.hidden = !shouldShow;
        form.setAttribute("aria-hidden", String(!shouldShow));
        if (toggle) toggle.textContent = shouldShow ? "Hide details" : "Edit details";
        if (shouldShow) {
            fillProjectInputs(form, getProjectDetails());
            form.querySelector("input, select, textarea")?.focus();
        }
    };

    toggle?.addEventListener("click", () => showForm(form.hidden));
    cancel?.addEventListener("click", () => showForm(false));

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        saveProjectDetails(collectProjectInputs(form));
        renderProjectSummary(root);
        showForm(false);
        onChange?.();
    });

    fillProjectInputs(form, getProjectDetails());
}

function collectProjectInputs(scope) {
    const details = getProjectDetails();
    scope.querySelectorAll("[data-project-input]").forEach((field) => {
        details[field.dataset.projectInput] = field.value.trim();
    });
    return details;
}

function fillProjectInputs(scope, details) {
    scope.querySelectorAll("[data-project-input]").forEach((field) => {
        field.value = details[field.dataset.projectInput] || "";
    });
}

function renderProjectSummary(root) {
    const details = getProjectDetails();
    setText(root, "[data-project-line]", getProjectLine(details));
    setText(root, "[data-project-type-label]", details.projectType || "Project type not set");
    root.dataset.projectReady = details.name && details.address ? "true" : "false";
}

function buildWhatsAppMessage(stageIndex, fieldValues = {}) {
    const stage = processStages[clampStage(stageIndex)] || processStages[0];
    const details = getProjectDetails();
    const mergedDetails = { ...details, ...fieldValues };
    const values = {
        ...mergedDetails,
        ...fieldValues,
        projectLine: getProjectLine(mergedDetails)
    };

    if (values.preparationTopics && !String(values.preparationTopics).trim().startsWith("-")) {
        values.preparationTopics = `- ${values.preparationTopics}`;
    }

    return stage.whatsappTemplate.replace(/\{([a-zA-Z0-9]+)\}/g, (_, key) => values[key] || "").trim();
}

function buildWhatsAppUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function openWhatsAppMessage(stageIndex, fieldValues = {}) {
    const message = buildWhatsAppMessage(stageIndex, fieldValues);
    window.open(buildWhatsAppUrl(message), "_blank", "noopener");
}

function normalizeProjectType(projectType) {
    return String(projectType || "")
        .toLowerCase()
        .replace(/[^a-z]/g, "");
}

function getPhotoGuide(projectType) {
    return photoGuides[normalizeProjectType(projectType)] || photoGuides.other;
}

function renderClientPortalStage(root, stageIndex) {
    const panel = root.querySelector("[data-stage-action-panel]");
    if (!panel) return;

    const stage = processStages[stageIndex];
    panel.innerHTML = stageIndex === 0
        ? renderEnquiryPanel(stage)
        : stageIndex === 1
            ? renderConsultPanel(stage)
            : renderStageFormPanel(stageIndex, stage);

    attachStagePanelEvents(root, stageIndex);
}

function renderEnquiryPanel(stage) {
    return `
        <div class="portal-action-card">
            <p class="portal-stage-instruction">A short intake keeps the first WhatsApp message tidy. You can edit these details later from any stage.</p>
            <button class="btn btn-primary portal-big-button" type="button" data-open-enquiry-form>${escapeHtml(stage.primaryCta)}</button>
            <form class="portal-inline-form" data-enquiry-form hidden>
                <div class="form-row">
                    <div class="field">
                        <label for="enquiryName">Name</label>
                        <input id="enquiryName" data-project-input="name" autocomplete="name" placeholder="Your name" required>
                    </div>
                    <div class="field">
                        <label for="enquiryAddress">Address</label>
                        <input id="enquiryAddress" data-project-input="address" autocomplete="street-address" placeholder="Project address" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="field">
                        <label for="enquiryPhone">Phone number optional</label>
                        <input id="enquiryPhone" data-project-input="phone" autocomplete="tel" placeholder="Best contact number">
                    </div>
                    <div class="field">
                        <label for="enquiryProjectType">Project type</label>
                        <select id="enquiryProjectType" data-project-input="projectType" required>
                            <option value="">Select a project type</option>
                            ${projectTypeOptions.map((option) => `<option>${escapeHtml(option)}</option>`).join("")}
                        </select>
                    </div>
                </div>
                <div class="field">
                    <label for="enquirySummary">Short project summary</label>
                    <textarea id="enquirySummary" data-project-input="summary" placeholder="Tell us briefly what you are planning." required></textarea>
                </div>
                <button class="btn btn-primary portal-big-button" type="submit">Open WhatsApp Enquiry</button>
            </form>
        </div>
    `;
}

function renderConsultPanel(stage) {
    const details = getProjectDetails();
    const selectedType = details.projectType || "Other";
    const guide = getPhotoGuide(selectedType);

    return `
        <form class="portal-action-card" data-stage-form>
            <div class="portal-photo-guidance">
                <div class="field">
                    <label for="consultProjectType">Project type for photo guidance</label>
                    <select id="consultProjectType" data-consult-project-type>
                        ${projectTypeOptions.map((option) => `<option${option === selectedType ? " selected" : ""}>${escapeHtml(option)}</option>`).join("")}
                    </select>
                </div>
                <div class="photo-guidance-card">
                    <span class="status-chip">Photo guidance</span>
                    <h4 data-photo-title>${escapeHtml(guide.title)}</h4>
                    <p data-photo-summary>${escapeHtml(guide.summary)}</p>
                    <ul class="portal-checklist photo-list" data-photo-list>
                        ${guide.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                    </ul>
                </div>
                <label class="portal-file-guide">
                    <span>Photo selection guide only</span>
                    <strong data-file-count>No photos selected yet</strong>
                    <input type="file" accept="image/*" multiple capture="environment" data-photo-files>
                </label>
                <p class="portal-photo-warning">Attach the photos requested below before sending. The WhatsApp message can be prepared automatically, but photos must still be attached manually in WhatsApp.</p>
            </div>
            <div class="portal-form-grid">
                ${renderFieldList(stage.optionalFields)}
            </div>
            <button class="btn btn-primary portal-big-button" type="submit">${escapeHtml(stage.primaryCta)}</button>
        </form>
    `;
}

function renderStageFormPanel(stageIndex, stage) {
    return `
        <form class="portal-action-card" data-stage-form>
            ${getStageIntroHtml(stageIndex)}
            <div class="portal-form-grid">
                ${renderFieldList(stage.optionalFields)}
            </div>
            <button class="btn btn-primary portal-big-button" type="submit">${escapeHtml(stage.primaryCta)}</button>
        </form>
    `;
}

function getStageIntroHtml(stageIndex) {
    if (stageIndex === 2) {
        return `
            <div class="portal-info-box">
                <span>Quoting discipline</span>
                <p>Early rough order estimates are guidance only. Once the scope is understood, Elite Building Services aims for quotations to remain within approximately +/- 5% of the original rough order estimate, unless the scope changes, hidden issues are discovered, customer choices change, or additional work is requested.</p>
                <p>This is a practical estimating discipline, not a legal guarantee.</p>
            </div>
        `;
    }

    if (stageIndex === 3) {
        return `
            <div class="portal-status-chips" aria-label="Possible preparation statuses">
                ${["Waiting on deposit", "Waiting on planning/building control", "Materials being ordered", "Start date being confirmed", "Customer decision needed", "Ready for build"].map((chip) => `<span>${chip}</span>`).join("")}
            </div>
        `;
    }

    if (stageIndex === 4) {
        return `
            <div class="portal-info-box">
                <span>Live build notes</span>
                <p>Key updates may be shared through WhatsApp. Some decisions may pause the build until customer confirmation is received.</p>
                <p>Delays can happen because of materials, weather, resource availability, access, hidden issues or customer decisions. Partial or staged payments may be required depending on the agreed scope.</p>
            </div>
        `;
    }

    if (stageIndex === 5) {
        return `
            <div class="portal-info-box">
                <span>Blue tape feedback</span>
                <p>Use blue tape as a simple visual snagging idea: mark or list minor issues, finish concerns or final adjustments so they are easy to review before completion.</p>
                <p>You can raise issues during the build. The final walkthrough is the last structured review before completion.</p>
            </div>
        `;
    }

    if (stageIndex === 6) {
        return `
            <div class="portal-info-box">
                <span>Completion items</span>
                <p>Use this stage for final payment queries, aftercare or warranty questions, handover confirmation, feedback and permission to use final project images if appropriate.</p>
            </div>
        `;
    }

    return "";
}

function renderFieldList(fields = []) {
    return fields.map((field) => renderPortalField(field)).join("");
}

function renderPortalField(field) {
    const label = escapeHtml(field.label);
    const id = `portalField-${field.id}`;
    const placeholder = field.placeholder ? ` placeholder="${escapeHtml(field.placeholder)}"` : "";

    if (field.type === "choice") {
        return `
            <fieldset class="portal-choice-field">
                <legend>${label}</legend>
                <div class="portal-option-grid">
                    ${field.options.map((option, index) => {
                        const checked = getDefaultChoice(field, option, index) ? " checked" : "";
                        return `
                            <label class="portal-choice">
                                <input type="radio" name="${escapeHtml(field.id)}" value="${escapeHtml(option)}" data-field="${escapeHtml(field.id)}"${checked}>
                                <span>${escapeHtml(option)}</span>
                            </label>
                        `;
                    }).join("")}
                </div>
            </fieldset>
        `;
    }

    if (field.type === "select") {
        return `
            <div class="field">
                <label for="${id}">${label}</label>
                <select id="${id}" data-field="${escapeHtml(field.id)}">
                    ${(field.options || projectTypeOptions).map((option) => `<option>${escapeHtml(option)}</option>`).join("")}
                </select>
            </div>
        `;
    }

    if (field.type === "textarea") {
        return `
            <div class="field portal-field-wide">
                <label for="${id}">${label}</label>
                <textarea id="${id}" data-field="${escapeHtml(field.id)}"${placeholder}></textarea>
            </div>
        `;
    }

    return `
        <div class="field">
            <label for="${id}">${label}</label>
            <input id="${id}" type="${escapeHtml(field.type || "text")}" data-field="${escapeHtml(field.id)}"${placeholder}>
        </div>
    `;
}

function getDefaultChoice(field, option, index) {
    if (field.id === "photoAttached") return option === "No";
    if (field.id === "portfolioPermission") return option === "Please ask me first";
    return index === 0;
}

function attachStagePanelEvents(root, stageIndex) {
    const panel = root.querySelector("[data-stage-action-panel]");
    if (!panel) return;

    const enquiryForm = panel.querySelector("[data-enquiry-form]");
    const openEnquiryButton = panel.querySelector("[data-open-enquiry-form]");
    if (enquiryForm) {
        fillProjectInputs(enquiryForm, getProjectDetails());
        openEnquiryButton?.addEventListener("click", () => {
            enquiryForm.hidden = false;
            openEnquiryButton.hidden = true;
            enquiryForm.querySelector("input, select, textarea")?.focus();
        });
        enquiryForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const details = collectProjectInputs(enquiryForm);
            saveProjectDetails(details);
            renderProjectSummary(root);
            openWhatsAppMessage(0, details);
        });
    }

    const consultType = panel.querySelector("[data-consult-project-type]");
    consultType?.addEventListener("change", () => {
        const details = { ...getProjectDetails(), projectType: consultType.value };
        saveProjectDetails(details);
        renderProjectSummary(root);
        updatePhotoGuidance(panel, consultType.value);
    });

    const photoFiles = panel.querySelector("[data-photo-files]");
    photoFiles?.addEventListener("change", () => {
        const count = photoFiles.files?.length || 0;
        setText(panel, "[data-file-count]", count ? `${count} photo${count === 1 ? "" : "s"} selected as a reminder` : "No photos selected yet");
    });

    const stageForm = panel.querySelector("[data-stage-form]");
    stageForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        openWhatsAppMessage(stageIndex, collectStageFields(stageForm));
    });
}

function updatePhotoGuidance(root, projectType) {
    const guide = getPhotoGuide(projectType);
    setText(root, "[data-photo-title]", guide.title);
    setText(root, "[data-photo-summary]", guide.summary);
    renderList(root, "[data-photo-list]", guide.items);
}

function collectStageFields(scope) {
    const values = {};
    scope.querySelectorAll("[data-field]").forEach((field) => {
        if (field.type === "radio" && !field.checked) return;
        values[field.dataset.field] = field.value.trim();
    });
    return values;
}

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function setupTeamModal() {
    const modal = document.getElementById("teamModal");
    const cards = Array.from(document.querySelectorAll("[data-team-card]"));
    if (!modal || !cards.length) return;

    const imageWrap = modal.querySelector("[data-team-modal-image-wrap]");
    const image = modal.querySelector("[data-team-modal-image]");
    const initials = modal.querySelector("[data-team-modal-initials]");
    const name = modal.querySelector("[data-team-modal-name]");
    const role = modal.querySelector("[data-team-modal-role]");
    const bio = modal.querySelector("[data-team-modal-bio]");
    const closeButtons = modal.querySelectorAll("[data-team-modal-close]");
    let lastFocused = null;

    const close = () => {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("is-locked");
        lastFocused?.focus?.();
    };

    const open = (card) => {
        lastFocused = document.activeElement;
        const imageSrc = card.dataset.image || "";
        const cardName = card.dataset.name || "Team Member";

        if (name) name.textContent = cardName;
        if (role) role.textContent = card.dataset.role || "Project Support";
        if (bio) bio.textContent = card.dataset.bio || "Bio coming soon.";

        if (imageSrc && image) {
            image.src = imageSrc;
            image.alt = card.dataset.imageAlt || cardName;
            image.hidden = false;
            initials.hidden = true;
            imageWrap?.classList.remove("is-placeholder");
        } else {
            if (image) {
                image.removeAttribute("src");
                image.alt = "";
                image.hidden = true;
            }
            if (initials) {
                initials.textContent = card.dataset.initials || "EBS";
                initials.hidden = false;
            }
            imageWrap?.classList.add("is-placeholder");
        }

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("is-locked");
        modal.querySelector(".modal-close")?.focus();
    };

    cards.forEach((card) => {
        card.addEventListener("click", () => open(card));
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", close);
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) close();
    });
}

function setText(root, selector, value) {
    root.querySelectorAll(selector).forEach((element) => {
        element.textContent = value;
    });
}

function renderList(root, selector, items) {
    root.querySelectorAll(selector).forEach((list) => {
        list.innerHTML = "";
        items.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });
    });
}

function renderActivity(root, items) {
    root.querySelectorAll("[data-activity-feed]").forEach((feed) => {
        feed.innerHTML = "";
        items.forEach(([title, note]) => {
            const item = document.createElement("div");
            item.className = "activity-item";

            const strong = document.createElement("strong");
            strong.textContent = title;

            const span = document.createElement("span");
            span.textContent = note;

            item.append(strong, span);
            feed.appendChild(item);
        });
    });
}

function setupPhotoGuidance() {
    document.querySelectorAll("[data-photo-type]").forEach((select) => {
        const root = select.closest("[data-portal]") || document;

        const update = () => {
            const guide = getPhotoGuide(select.value || "Extension");
            setText(root, "[data-photo-title]", guide.title);
            setText(root, "[data-photo-summary]", guide.summary);
            setText(root, "[data-photo-upload-label]", guide.upload);
            renderList(root, "[data-photo-list]", guide.items);
        };

        select.addEventListener("change", update);
        update();
    });
}

function setupImageFallbacks() {
    const markFailed = (image) => {
        image.classList.add("image-load-failed");
        image.setAttribute("data-image-state", "failed");
    };

    document.addEventListener("error", (event) => {
        if (event.target instanceof HTMLImageElement) {
            markFailed(event.target);
        }
    }, true);

    document.querySelectorAll("img").forEach((image) => {
        if (image.complete && image.naturalWidth === 0) {
            markFailed(image);
        }
    });
}

function setupScrollReveals() {
    const targets = Array.from(document.querySelectorAll(".mosaic-item, .service-card, .service-feature, .team-card, .team-grid-equal, .case-study-grid, .project-card, .gallery-item, .featured-case, .simple-process"));
    if (!targets.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
        targets.forEach((target) => target.classList.add("is-revealed"));
        return;
    }

    targets.forEach((target) => target.classList.add("reveal-item"));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.14, rootMargin: "0px 0px -7% 0px" });

    targets.forEach((target) => observer.observe(target));
}

function setupProjectModal() {
    const modal = document.getElementById("projectModal");
    const cards = Array.from(document.querySelectorAll("[data-project-card]"));
    if (!modal || !cards.length) return;

    const image = modal.querySelector("[data-modal-image]");
    const title = modal.querySelector("[data-modal-title]");
    const type = modal.querySelector("[data-modal-type]");
    const location = modal.querySelector("[data-modal-location]");
    const result = modal.querySelector("[data-modal-result]");
    const challenge = modal.querySelector("[data-modal-challenge]");
    const approach = modal.querySelector("[data-modal-approach]");
    const outcome = modal.querySelector("[data-modal-outcome]");
    const caption = modal.querySelector("[data-modal-caption]");
    const thumbnails = modal.querySelector("[data-modal-thumbnails]");
    const prevButton = modal.querySelector("[data-gallery-prev]");
    const nextButton = modal.querySelector("[data-gallery-next]");
    const closeButtons = modal.querySelectorAll("[data-modal-close]");
    const closeButton = modal.querySelector(".modal-close");
    const focusableSelector = "a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex='-1'])";
    let gallery = [];
    let activeImage = 0;
    let lastFocused = null;
    let touchStartX = 0;

    const getGallery = (card) => {
        const cardImage = card.querySelector("img");
        const images = (card.dataset.images || card.dataset.image || cardImage?.getAttribute("src") || "")
            .split("|")
            .map((item) => item.trim())
            .filter(Boolean);
        const captions = (card.dataset.captions || "")
            .split("|")
            .map((item) => item.trim());

        return images.map((src, index) => ({
            src,
            caption: captions[index] || card.dataset.title || "Project image",
            alt: index === 0 ? cardImage?.alt || card.dataset.title || "Project image" : `${card.dataset.title || "Project"} image ${index + 1}`
        }));
    };

    const updateGallery = (index) => {
        if (!gallery.length || !image) return;
        activeImage = (index + gallery.length) % gallery.length;
        const item = gallery[activeImage];
        image.classList.remove("is-loaded");
        image.src = item.src;
        image.alt = item.alt;
        if (caption) caption.textContent = item.caption;

        window.requestAnimationFrame(() => {
            image.classList.add("is-loaded");
        });

        thumbnails?.querySelectorAll("button").forEach((button, buttonIndex) => {
            button.classList.toggle("is-active", buttonIndex === activeImage);
            button.setAttribute("aria-current", buttonIndex === activeImage ? "true" : "false");
        });
    };

    const renderThumbnails = () => {
        if (!thumbnails) return;
        thumbnails.innerHTML = "";
        gallery.forEach((item, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.setAttribute("aria-label", `Show project image ${index + 1}`);
            const thumb = document.createElement("img");
            thumb.src = item.src;
            thumb.alt = "";
            button.appendChild(thumb);
            button.addEventListener("click", () => updateGallery(index));
            thumbnails.appendChild(button);
        });
    };

    const openModal = (card) => {
        lastFocused = document.activeElement;
        gallery = getGallery(card);
        renderThumbnails();
        const hasMultipleImages = gallery.length > 1;
        if (prevButton) prevButton.hidden = !hasMultipleImages;
        if (nextButton) nextButton.hidden = !hasMultipleImages;
        if (thumbnails) thumbnails.hidden = !hasMultipleImages;

        if (title) title.textContent = card.dataset.title || "Project preview";
        if (type) type.textContent = card.dataset.type || "Project";
        if (location) location.textContent = card.dataset.location || "East Midlands";
        if (result) result.textContent = card.dataset.result || "";
        if (challenge) challenge.textContent = card.dataset.challenge || "";
        if (approach) approach.textContent = card.dataset.approach || "";
        if (outcome) outcome.textContent = card.dataset.outcome || "";

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("is-locked");
        updateGallery(0);
        closeButton?.focus();
    };

    const closeModal = () => {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("is-locked");
        lastFocused?.focus?.();
    };

    cards.forEach((card) => {
        card.addEventListener("click", (event) => {
            event.preventDefault();
            openModal(card);
        });
    });

    if (window.location.hash === "#projectModal") {
        window.setTimeout(() => openModal(cards[0]), 200);
    }

    closeButtons.forEach((button) => {
        button.addEventListener("click", closeModal);
    });

    prevButton?.addEventListener("click", () => {
        if (gallery.length > 1) updateGallery(activeImage - 1);
    });
    nextButton?.addEventListener("click", () => {
        if (gallery.length > 1) updateGallery(activeImage + 1);
    });

    modal.addEventListener("touchstart", (event) => {
        touchStartX = event.changedTouches[0]?.clientX || 0;
    }, { passive: true });

    modal.addEventListener("touchend", (event) => {
        const touchEndX = event.changedTouches[0]?.clientX || 0;
        const delta = touchEndX - touchStartX;
        if (gallery.length <= 1) return;
        if (Math.abs(delta) < 48) return;
        updateGallery(delta > 0 ? activeImage - 1 : activeImage + 1);
    }, { passive: true });

    window.addEventListener("keydown", (event) => {
        if (!modal.classList.contains("is-open")) return;

        if (event.key === "Escape") {
            closeModal();
        }

        if (gallery.length > 1 && event.key === "ArrowLeft") updateGallery(activeImage - 1);
        if (gallery.length > 1 && event.key === "ArrowRight") updateGallery(activeImage + 1);

        if (event.key === "Tab") {
            const focusable = Array.from(modal.querySelectorAll(focusableSelector)).filter((element) => element.offsetParent !== null);
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });
}

function setupFloatingEnquiry() {
    document.querySelectorAll("[data-floating-enquiry]").forEach((widget) => {
        const toggle = widget.querySelector(".floating-enquiry-toggle");
        if (!toggle) return;

        const close = () => {
            widget.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        };

        toggle.addEventListener("click", (event) => {
            event.stopPropagation();
            const isOpen = widget.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        widget.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", close);
        });

        document.addEventListener("click", (event) => {
            if (!widget.contains(event.target)) close();
        });

        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape") close();
        });
    });
}
