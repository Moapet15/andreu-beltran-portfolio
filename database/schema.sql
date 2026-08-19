CREATE TABLE IF NOT EXISTS leads (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    company VARCHAR(160),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(40),
    service VARCHAR(80) NOT NULL,
    budget VARCHAR(80),
    message TEXT NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'new'
        CHECK (status IN ('new', 'contacted', 'meeting', 'proposal', 'won', 'lost')),
    source VARCHAR(120),
    utm_source VARCHAR(120),
    utm_medium VARCHAR(120),
    utm_campaign VARCHAR(160),
    referrer TEXT,
    landing_page TEXT,
    privacy_consent BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
