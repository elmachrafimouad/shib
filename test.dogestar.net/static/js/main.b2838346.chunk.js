(this.webpackJsonpdogestar = this.webpackJsonpdogestar || []).push([
  [0],
  {
    103: function (e, t, n) {
      e.exports = {
        main: "InfoCard_main__1ATSl",
        iconContainer: "InfoCard_iconContainer__1WWSg",
        value: "InfoCard_value__3SaYz",
        percent: "InfoCard_percent__3MnjG",
        text: "InfoCard_text__1ccUg",
        available: "InfoCard_available__36fKB",
        deposits: "InfoCard_deposits__1dZbq",
        claimed: "InfoCard_claimed__rJ-Zl",
        payout: "InfoCard_payout__3SAnF",
      };
    },
    116: function (e, t, n) {
      e.exports = {
        main: "Menu_main__3mFN7",
        item: "Menu_item__hV3ZR",
        active: "Menu_active__1owJ5",
      };
    },
    156: function (e, t, n) {
      e.exports = {
        main: "ConnectWallet_main__1M5sg",
        fade: "ConnectWallet_fade__1GQPI",
        header: "ConnectWallet_header__2p5k-",
        content: "ConnectWallet_content__3WT6p",
        button: "ConnectWallet_button__Hv4WX",
        submit: "ConnectWallet_submit__3Cx5f",
      };
    },
    184: function (e, t, n) {
      e.exports = {
        main: "Deposit_main__2izZ6",
        actions: "Deposit_actions__1WjYG",
      };
    },
    215: function (e, t, n) {
      e.exports = {
        main: "Sidebar_main__1etgN",
        logo: "Sidebar_logo__12HgI",
        exit: "Sidebar_exit__1Xyzd",
      };
    },
    216: function (e, t, n) {
      e.exports = {
        main: "CustomButton_main__37e8H",
        primary: "CustomButton_primary__2Bjxp",
        secondary: "CustomButton_secondary__2vZ4P",
      };
    },
    218: function (e, t, n) {
      e.exports = {
        main: "Layout_main__1e5_i",
        sidebar: "Layout_sidebar__3mrLs",
        content: "Layout_content__2HmG0",
      };
    },
    219: function (e, t, n) {
      e.exports = {
        main: "Home_main__2EXr7",
        mobile: "Home_mobile__1svcV",
        content: "Home_content__yFqEA",
      };
    },
    289: function (e, t, n) {
      e.exports = { main: "Navbar_main__1ZLrQ", logo: "Navbar_logo__2193H" };
    },
    35: function (e, t, n) {
      e.exports = {
        main: "Countdown_main__1qoNx",
        block: "Countdown_block__26g36",
        fade: "Countdown_fade__26XTB",
        numbers: "Countdown_numbers__2rB25",
        number: "Countdown_number__1Uuc0",
      };
    },
    460: function (e, t, n) {
      e.exports = { main: "States_main__IpWQ3" };
    },
    461: function (e, t, n) {
      e.exports = { main: "Card_main__1CKwB" };
    },
    462: function (e, t, n) {
      e.exports = {
        main: "Overflow_main__3rUUG",
        fade: "Overflow_fade__1Dlh7",
      };
    },
    481: function (e, t, n) {},
    50: function (e, t, n) {
      e.exports = {
        info: "Referals_info__vdp9y",
        field: "Referals_field__OvGGw",
        marketing: "Referals_marketing__Neu2k",
        fieldValue: "Referals_fieldValue__2nleZ",
        value: "Referals_value__7_SpC",
        dop: "Referals_dop__20WIh",
      };
    },
    504: function (e, t) {},
    508: function (e, t) {},
    510: function (e, t) {},
    514: function (e, t) {},
    539: function (e, t) {},
    541: function (e, t) {},
    550: function (e, t) {},
    552: function (e, t) {},
    562: function (e, t) {},
    564: function (e, t) {},
    677: function (e, t) {},
    679: function (e, t) {},
    686: function (e, t) {},
    687: function (e, t) {},
    711: function (e, t) {},
    718: function (e, t) {},
    779: function (e, t) {},
    803: function (e, t) {},
    92: function (e, t, n) {
      e.exports = {
        main: "FormDeposit_main__2YGvp",
        maxBut: "FormDeposit_maxBut__WK4En",
        fields: "FormDeposit_fields__C4DIQ",
        field: "FormDeposit_field__3Yq94",
        header: "FormDeposit_header__2pxm3",
        onlyMobile: "FormDeposit_onlyMobile__3blGp",
      };
    },
    922: function (e, t, n) {},
    923: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        i = n.n(a),
        s = (n(481), n(466)),
        r = n(32),
        c = n(439),
        u = n.n(c),
        l = n(22),
        o = n(215),
        d = n.n(o),
        p = n(987),
        m = (n(39), n(280)),
        y = n.n(m);
      n(285);
      var b = n(216),
        j = n.n(b),
        h = n(1),
        x = function (e) {
          var t = e.text,
            n = e.onClick,
            a = e.variant,
            i = e.disabled,
            s = e.style;
          return Object(h.jsx)(p.a, {
            style: s,
            className: y()(
              j.a.main,
              "primary" === a ? j.a.primary : "",
              "secondary" === a ? j.a.secondary : ""
            ),
            onClick: n,
            disabled: i,
            children: t,
          });
        },
        f = n.p + "static/media/logout.svg",
        O = n(41),
        v = n(50),
        A = n.n(v),
        T = n(52),
        w = n(984),
        g = n(983),
        N = i.a.forwardRef(function (e, t) {
          return Object(h.jsx)(
            g.a,
            Object(O.a)({ elevation: 6, ref: t, variant: "filled" }, e)
          );
        }),
        C = function (e) {
          var t,
            n = e.info,
            i = Object(T.c)(function (e) {
              return e.common;
            }),
            s = i.user,
            r = i.contract,
            c = Object(a.useState)(!1),
            u = Object(l.a)(c, 2),
            o = u[0],
            d = u[1],
            p = function (e, t) {
              "clickaway" !== t && d(!1);
            };
          return Object(h.jsxs)("div", {
            className: A.a.info,
            children: [
              Object(h.jsxs)("div", {
                className: A.a.field,
                children: [
                  Object(h.jsx)("span", { children: "Referral Rewards" }),
                  Object(h.jsxs)("div", {
                    className: A.a.fieldValue,
                    children: [
                      Object(h.jsx)("p", {
                        className: A.a.value,
                        children: Number(s.referralRewards).toFixed(2),
                      }),
                      Object(h.jsx)("p", {
                        className: A.a.dop,
                        children: "DOGE STAR",
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: A.a.field,
                children: [
                  Object(h.jsx)("span", { children: "Team" }),
                  Object(h.jsx)("div", {
                    className: A.a.fieldValue,
                    children: Object(h.jsx)("p", {
                      className: A.a.value,
                      children: s.team,
                    }),
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: A.a.field,
                children: [
                  Object(h.jsx)("span", { children: "My Referral" }),
                  Object(h.jsx)("div", {
                    className: A.a.fieldValue,
                    children: Object(h.jsx)("p", {
                      className: A.a.dop,
                      children: ""
                        .concat(s.myReferral.slice(0, 6), "...")
                        .concat(s.myReferral.slice(-6)),
                    }),
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: A.a.field,
                children: [
                  Object(h.jsx)("span", { children: "Marketing Wallet" }),
                  Object(h.jsx)("div", {
                    className: A.a.fieldValue,
                    children: Object(h.jsx)("p", {
                      onClick: function () {
                        return (
                          (e = n.marketing_wallet),
                          navigator.clipboard.writeText(e),
                          void d(!0)
                        );
                        var e;
                      },
                      className: A.a.marketing,
                      children:
                        n.marketing_wallet.substring(0, 7) +
                        "..." +
                        n.marketing_wallet.substring(
                          n.marketing_wallet.length - 4
                        ),
                    }),
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: A.a.field,
                children: [
                  Object(h.jsx)("span", { children: "Total Deposited" }),
                  Object(h.jsxs)("div", {
                    className: A.a.fieldValue,
                    children: [
                      Object(h.jsx)("p", {
                        className: A.a.value,
                        children: Number(r.totalDeposited).toFixed(2),
                      }),
                      Object(h.jsx)("p", {
                        className: A.a.dop,
                        children: "DOGE STAR",
                      }),
                    ],
                  }),
                ],
              }),
              Object(h.jsxs)("div", {
                className: A.a.field,
                children: [
                  Object(h.jsx)("span", { children: "Total Users" }),
                  Object(h.jsx)("div", {
                    className: A.a.fieldValue,
                    children: Object(h.jsx)("p", {
                      className: A.a.value,
                      children:
                        ((t = r.totalUsers),
                        t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
                    }),
                  }),
                ],
              }),
              Object(h.jsx)(w.a, {
                open: o,
                autoHideDuration: 6e3,
                onClose: p,
                children: Object(h.jsx)(N, {
                  autoHideDuration: 1e3,
                  onClose: p,
                  severity: "success",
                  sx: { width: "100%" },
                  children: "Copied to clipboard!",
                }),
              }),
            ],
          });
        },
        I = n(15),
        R = n(3),
        E = n.n(R),
        D = n(63),
        M = n(109),
        k = n(445),
        _ = n.n(k),
        L = n(290),
        U = n(113),
        S = n(457),
        W = n(455),
        V = n.n(W),
        B = {
          loading: "",
          userAddress: "",
          connectionType: "",
          chainId: "",
          user: {
            referralRewards: "",
            team: "",
            myReferral: "",
            available: "",
            deposits: "",
            claimed: "",
            maxPayout: "",
            unlockTime: "",
            balance: "",
            isAllowed: "",
          },
          contract: {
            totalDeposited: "",
            totalUsers: "",
            unlockDate: "",
            lockDate: "",
          },
        },
        H = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : B,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "UPDATE_USER":
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                {
                  loading: !1,
                  userAddress: t.payload.userAddress,
                  connectionType: t.payload.connectionType,
                }
              );
            case "UPDATE_CHAIN":
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                { chainId: t.payload.chainId }
              );
            case "UPDATE_CONTRACT_INFO":
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                {
                  loading: !1,
                  contract: {
                    totalDeposited: t.payload.totalDeposited,
                    totalUsers: t.payload.totalUsers,
                    unlockDate: t.payload.unlockDate,
                    lockDate: t.payload.lockDate,
                  },
                }
              );
            case "UPDATE_USER_INFO":
              return Object(O.a)(
                Object(O.a)({}, e),
                {},
                {
                  loading: !1,
                  user: {
                    referralRewards: t.payload.referralRewards,
                    team: t.payload.team,
                    myReferral: t.payload.myReferral,
                    available: t.payload.available,
                    deposits: t.payload.deposits,
                    claimed: t.payload.claimed,
                    maxPayout: t.payload.maxPayout,
                    unlockTime: t.payload.unlockTime,
                    balance: t.payload.balance,
                    isAllowed: t.payload.isAllowed,
                  },
                }
              );
            default:
              return e;
          }
        },
        Z = { signer: null },
        F = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Z,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "UPDATE_SIGNER" === t.type
            ? Object(O.a)(Object(O.a)({}, e), {}, { signer: t.payload.signer })
            : e;
        },
        z = n(456),
        P = n.n(z),
        X = n(211),
        G = { key: "counter", storage: P.a, whitelist: ["common"] },
        q = Object(U.b)({ common: H, signer: F }),
        Y = Object(X.a)(G, q),
        Q = Object(U.c)(Y, Object(U.a)(S.a, V.a));
      window.store = Q;
      var J = Q,
        K = [
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "_src",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "_dest",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "_deposits",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "_payouts",
                type: "uint256",
              },
            ],
            name: "BalanceTransfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "beneficiary",
                type: "address",
              },
            ],
            name: "BeneficiaryUpdate",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
            ],
            name: "Checkin",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "DirectPayout",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
            ],
            name: "HeartBeat",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "interval",
                type: "uint256",
              },
            ],
            name: "HeartBeatIntervalUpdate",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "referrals",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "total_deposits",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "total_payouts",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "total_structure",
                type: "uint256",
              },
            ],
            name: "Leaderboard",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "LimitReached",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "manager",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
            ],
            name: "ManagerUpdate",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "MatchPayout",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
            ],
            name: "NewAirdrop",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "NewDeposit",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "upline",
                type: "address",
              },
            ],
            name: "Upline",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            name: "Withdraw",
            type: "event",
          },
          {
            inputs: [],
            name: "BurnTax",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "CompoundTax",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "ExitTax",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "MAX_UINT",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "airdrops",
            outputs: [
              { internalType: "uint256", name: "airdrops", type: "uint256" },
              {
                internalType: "uint256",
                name: "airdrops_received",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "last_airdrop",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_upline", type: "address" },
            ],
            name: "changeUpline",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "checkin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_addr", type: "address" },
            ],
            name: "claimsAvailable",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "contractInfo",
            outputs: [
              {
                internalType: "uint256",
                name: "_total_users",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_total_deposited",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_total_withdraw",
                type: "uint256",
              },
              { internalType: "uint256", name: "_total_bnb", type: "uint256" },
              { internalType: "uint256", name: "_total_txs", type: "uint256" },
              {
                internalType: "uint256",
                name: "_unlock_date",
                type: "uint256",
              },
              { internalType: "uint256", name: "_lock_date", type: "uint256" },
              {
                internalType: "uint256",
                name: "_unlock_period",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_lock_period",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_addr", type: "address" },
            ],
            name: "creditsAndDebits",
            outputs: [
              { internalType: "uint256", name: "_credits", type: "uint256" },
              { internalType: "uint256", name: "_debits", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "custody",
            outputs: [
              { internalType: "address", name: "manager", type: "address" },
              { internalType: "address", name: "beneficiary", type: "address" },
              {
                internalType: "uint256",
                name: "last_heartbeat",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "last_checkin",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "heartbeat_interval",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_upline", type: "address" },
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "deposit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "deposit_bracket_size",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_addr", type: "address" },
            ],
            name: "getCustody",
            outputs: [
              {
                internalType: "address",
                name: "_beneficiary",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "_heartbeat_interval",
                type: "uint256",
              },
              { internalType: "address", name: "_manager", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_user", type: "address" },
            ],
            name: "getUserInfo",
            outputs: [
              {
                components: [
                  { internalType: "address", name: "upline", type: "address" },
                  {
                    internalType: "uint256",
                    name: "referrals",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "total_structure",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "direct_bonus",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "match_bonus",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "deposits",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "deposit_time",
                    type: "uint256",
                  },
                  { internalType: "uint256", name: "payouts", type: "uint256" },
                  { internalType: "uint256", name: "rolls", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "ref_claim_pos",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "accumulatedDiv",
                    type: "uint256",
                  },
                ],
                internalType: "struct HuchaFaucet.User",
                name: "user",
                type: "tuple",
              },
              { internalType: "uint256", name: "max_payout", type: "uint256" },
              { internalType: "uint256", name: "net_payout", type: "uint256" },
              {
                internalType: "uint256",
                name: "tokenBalance",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "huchaVaultAddress",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_huchaTokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "_vaultAddress",
                type: "address",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_addr", type: "address" },
            ],
            name: "isNetPositive",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_addr", type: "address" },
            ],
            name: "lastActivity",
            outputs: [
              { internalType: "uint256", name: "_heartbeat", type: "uint256" },
              {
                internalType: "uint256",
                name: "_lapsed_heartbeat",
                type: "uint256",
              },
              { internalType: "uint256", name: "_checkin", type: "uint256" },
              {
                internalType: "uint256",
                name: "_lapsed_checkin",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "maxPayoutOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "pure",
            type: "function",
          },
          {
            inputs: [],
            name: "max_payout_cap",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_addr", type: "address" },
            ],
            name: "payoutOf",
            outputs: [
              { internalType: "uint256", name: "payout", type: "uint256" },
              { internalType: "uint256", name: "max_payout", type: "uint256" },
              { internalType: "uint256", name: "net_payout", type: "uint256" },
              {
                internalType: "uint256",
                name: "sustainability_fee",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            name: "ref_balances",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "roll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_addr", type: "address" },
              { internalType: "uint256", name: "_pendingDiv", type: "uint256" },
            ],
            name: "sustainabilityFeeV2",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "total_airdrops",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "total_bnb",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "total_deposited",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "total_txs",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "total_users",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "total_withdraw",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_newCompoundTax",
                type: "uint256",
              },
            ],
            name: "updateCompoundTax",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_newBracketSize",
                type: "uint256",
              },
            ],
            name: "updateDepositBracketSize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_newExitTax", type: "uint256" },
              { internalType: "uint256", name: "_BurnTax", type: "uint256" },
            ],
            name: "updateExitTax",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256[]",
                name: "_newRefBalances",
                type: "uint256[]",
              },
            ],
            name: "updateHoldRequirements",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_newInitialDeposit",
                type: "uint256",
              },
            ],
            name: "updateInitialDeposit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_newUnlock_period",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_newLock_period",
                type: "uint256",
              },
            ],
            name: "updateLockPeriods",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "updateLockTime",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_newPayoutCap",
                type: "uint256",
              },
            ],
            name: "updateMaxPayoutCap",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_newPayoutRate",
                type: "uint256",
              },
            ],
            name: "updatePayoutRate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_newRefBonus",
                type: "uint256",
              },
            ],
            name: "updateRefBonus",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_newRefDepth",
                type: "uint256",
              },
            ],
            name: "updateRefDepth",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_addr", type: "address" },
            ],
            name: "userInfo",
            outputs: [
              { internalType: "address", name: "upline", type: "address" },
              {
                internalType: "uint256",
                name: "deposit_time",
                type: "uint256",
              },
              { internalType: "uint256", name: "deposits", type: "uint256" },
              { internalType: "uint256", name: "payouts", type: "uint256" },
              {
                internalType: "uint256",
                name: "direct_bonus",
                type: "uint256",
              },
              { internalType: "uint256", name: "match_bonus", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_addr", type: "address" },
            ],
            name: "userInfoTotals",
            outputs: [
              { internalType: "uint256", name: "referrals", type: "uint256" },
              {
                internalType: "uint256",
                name: "total_deposits",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "total_payouts",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "total_structure",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "airdrops_total",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "airdrops_received",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "users",
            outputs: [
              { internalType: "address", name: "upline", type: "address" },
              { internalType: "uint256", name: "referrals", type: "uint256" },
              {
                internalType: "uint256",
                name: "total_structure",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "direct_bonus",
                type: "uint256",
              },
              { internalType: "uint256", name: "match_bonus", type: "uint256" },
              { internalType: "uint256", name: "deposits", type: "uint256" },
              {
                internalType: "uint256",
                name: "deposit_time",
                type: "uint256",
              },
              { internalType: "uint256", name: "payouts", type: "uint256" },
              { internalType: "uint256", name: "rolls", type: "uint256" },
              {
                internalType: "uint256",
                name: "ref_claim_pos",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "accumulatedDiv",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          { stateMutability: "payable", type: "receive" },
        ],
        $ = [
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "who", type: "address" }],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        ee = function (e) {
          return { type: "UPDATE_USER", payload: e };
        },
        te = function (e) {
          return { type: "UPDATE_CHAIN", payload: e };
        },
        ne = new D.a.providers.JsonRpcProvider(
          "https://bsc-dataseed1.ninicoin.io/"
        ),
        ae = "0xc865A5938EdA8B5f6629A17fc066D74bB20Ab85d",
        ie = "0x6557Cc09801F61101DAb184c580294f2E4846870",
        se = new D.a.Contract(ie, K, ne),
        re = new D.a.Contract(ae, $, ne),
        ce =
          (new D.a.Contract(
            "0x10ED43C718714eb63d5aA57B78B54704E256024E",
            [
              "function getAmountsOut(uint amountIn, address[] path) external view returns (uint[] memory amounts)",
            ],
            ne
          ),
          function () {
            return (function () {
              var e = Object(I.a)(
                E.a.mark(function e(t) {
                  var n;
                  return E.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), se.contractInfo()
                            );
                          case 3:
                            (n = e.sent),
                              t({
                                type: "UPDATE_CONTRACT_INFO",
                                payload: {
                                  totalDeposited: D.a.utils.formatUnits(
                                    n._total_deposited,
                                    18
                                  ),
                                  totalUsers: Number(n._total_users),
                                  unlockDate: Number(1e3 * n._unlock_date),
                                  lockDate: Number(1e3 * n._lock_date),
                                },
                              }),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0, "usdValue");
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          }),
        ue = function (e) {
          return (function () {
            var t = Object(I.a)(
              E.a.mark(function t(n) {
                var a, i, s;
                return E.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            e ||
                              ((a = J.getState().common), (e = a.userAddress)),
                            (t.next = 4),
                            se.getUserInfo(e)
                          );
                        case 4:
                          return (
                            (i = t.sent), (t.next = 7), re.allowance(e, ie)
                          );
                        case 7:
                          (s = t.sent),
                            n({
                              type: "UPDATE_USER_INFO",
                              payload: {
                                referralRewards: D.a.utils.formatUnits(
                                  i.user.match_bonus,
                                  18
                                ),
                                team: Number(i.user.referrals),
                                myReferral: i.user.upline,
                                available: D.a.utils.formatUnits(
                                  i.net_payout,
                                  18
                                ),
                                deposits: D.a.utils.formatUnits(
                                  i.user.deposits,
                                  18
                                ),
                                claimed: D.a.utils.formatUnits(
                                  i.user.payouts,
                                  18
                                ),
                                maxPayout: D.a.utils.formatUnits(
                                  i.max_payout,
                                  18
                                ),
                                unlockTime: Number(1e3 * i.user.unlock_time),
                                balance: D.a.utils.formatUnits(
                                  i.tokenBalance,
                                  18
                                ),
                                isAllowed: Number(s) > 0,
                              },
                            }),
                            (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            console.log(t.t0, "getUserInfo");
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        le = function (e, t, n) {
          return (function () {
            var a = Object(I.a)(
              E.a.mark(function a(i) {
                var s, r, c, u, l, o;
                return E.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          (a.prev = 0),
                            (s = J.getState().signer),
                            (r = new D.a.Contract(ie, K, s.signer)),
                            (a.t0 = e),
                            (a.next =
                              "DEPOSIT" === a.t0
                                ? 6
                                : "WITHDRAW" === a.t0
                                ? 16
                                : "CHANGE_REFERRAL" === a.t0
                                ? 21
                                : "CLAIM" === a.t0
                                ? 25
                                : "ROLL" === a.t0
                                ? 29
                                : "APPROVE" === a.t0
                                ? 33
                                : 38);
                          break;
                        case 6:
                          return (
                            (u = D.a.utils.parseUnits(n, 18)),
                            (a.next = 9),
                            ye(t)
                          );
                        case 9:
                          if (a.sent) {
                            a.next = 12;
                            break;
                          }
                          return a.abrupt(
                            "return",
                            window.alert(
                              "Ref should be an address with active deposits"
                            )
                          );
                        case 12:
                          return (
                            (a.next = 14), r.deposit(t, u, { gasLimit: 12e5 })
                          );
                        case 14:
                          return (c = a.sent), a.abrupt("break", 39);
                        case 16:
                          return (
                            (u = D.a.utils.parseUnits(n, 18)),
                            (a.next = 19),
                            r.withdraw(u, { gasLimit: 8e5 })
                          );
                        case 19:
                          return (c = a.sent), a.abrupt("break", 39);
                        case 21:
                          return (
                            (a.next = 23), r.changeUpline(t, { gasLimit: 35e4 })
                          );
                        case 23:
                          return (c = a.sent), a.abrupt("break", 39);
                        case 25:
                          return (a.next = 27), r.claim({ gasLimit: 5e5 });
                        case 27:
                          return (c = a.sent), a.abrupt("break", 39);
                        case 29:
                          return (a.next = 31), r.roll({ gasLimit: 35e4 });
                        case 31:
                          return (c = a.sent), a.abrupt("break", 39);
                        case 33:
                          return (
                            (l = new D.a.Contract(ae, $, s.signer)),
                            (a.next = 36),
                            l.approve(
                              ie,
                              "115792089237316195423570985008687907853269984665640564039457584007913129639935"
                            )
                          );
                        case 36:
                          return (c = a.sent), a.abrupt("break", 39);
                        case 38:
                          return a.abrupt("break", 39);
                        case 39:
                          return (a.next = 41), c.wait();
                        case 41:
                          return (
                            (o = a.sent),
                            i(ue()),
                            i(ce()),
                            a.abrupt("return", o)
                          );
                        case 47:
                          (a.prev = 47),
                            (a.t1 = a.catch(0)),
                            console.log(a.t1, "initAction"),
                            a.t1.data && window.alert(a.t1.data.message);
                        case 51:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 47]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        oe = function () {
          return (function () {
            var e = Object(I.a)(
              E.a.mark(function e(t) {
                var n, a, i, s;
                return E.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            console.log("hola"),
                            (e.next = 4),
                            window.ethereum.request({
                              method: "eth_requestAccounts",
                            })
                          );
                        case 4:
                          return (
                            (n = e.sent),
                            (a = n[0]),
                            t(ue(a)),
                            (e.next = 9),
                            window.ethereum.request({ method: "eth_chainId" })
                          );
                        case 9:
                          (i = e.sent),
                            (s = parseInt(i, 16)),
                            t(te({ chainId: s })),
                            t(me()),
                            window.ethereum.on("accountsChanged", function (e) {
                              t(
                                ee({
                                  userAddress: e[0],
                                  connectionType: "metamask",
                                  provider: null,
                                })
                              ),
                                t(me()),
                                t(ue(e[0]));
                            }),
                            window.ethereum.on("chainChanged", function (e) {
                              window.location.reload();
                            }),
                            a &&
                              t(
                                ee({
                                  userAddress: a,
                                  connectionType: "metamask",
                                })
                              ),
                            (e.next = 21);
                          break;
                        case 18:
                          (e.prev = 18), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 21:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 18]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        de = function () {
          return (function () {
            var e = Object(I.a)(
              E.a.mark(function e(t) {
                var n, a, i, s;
                return E.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            console.log("hola"),
                            (n = new L.a({
                              rpc: { 56: "https://bsc-dataseed1.ninicoin.io/" },
                              chainId: 56,
                              infuraId: null,
                            })),
                            (e.next = 5),
                            n.enable()
                          );
                        case 5:
                          return (
                            t(me("WALLET_CONNECT", n)),
                            (a = new _.a(n)),
                            (e.next = 9),
                            a.eth.getAccounts()
                          );
                        case 9:
                          return (
                            (i = e.sent),
                            t(ue(i[0])),
                            (e.next = 13),
                            a.eth.getChainId()
                          );
                        case 13:
                          (s = e.sent),
                            t(te({ chainId: s })),
                            n.on("accountsChanged", function (e) {
                              console.log(e),
                                t(
                                  ee({
                                    userAddress: e[0],
                                    connectionType: "WALLET_CONNECT",
                                  })
                                ),
                                t(ue(e[0])),
                                t(me("WALLET_CONNECT", n));
                            }),
                            n.on("disconnect", function (e, n) {
                              t(pe());
                            }),
                            n.on("chainChanged", function (e) {
                              t(te({ chainId: e }));
                            }),
                            i &&
                              t(
                                ee({
                                  userAddress: i[0],
                                  connectionType: "WALLET_CONNECT",
                                })
                              ),
                            (e.next = 24);
                          break;
                        case 21:
                          (e.prev = 21), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 21]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        pe = function () {
          var e = J.getState().common;
          return (function () {
            var t = Object(I.a)(
              E.a.mark(function t(n) {
                var a;
                return E.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0),
                            "WALLET_CONNECT" !== e.connectionType)
                          ) {
                            t.next = 6;
                            break;
                          }
                          return (
                            (a = new L.a({
                              rpc: { 56: "https://bsc-dataseed1.ninicoin.io/" },
                              chainId: 56,
                              infuraId: null,
                            })),
                            (t.next = 6),
                            a.disconnect()
                          );
                        case 6:
                          n(
                            ee({
                              userAddress: "",
                              connectionType: "",
                              provider: null,
                            })
                          ),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9), (t.t0 = t.catch(0)), console.log(t.t0);
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        me = function (e, t) {
          return (function () {
            var n = Object(I.a)(
              E.a.mark(function n(a) {
                var i, s, r;
                return E.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (((n.prev = 0), "WALLET_CONNECT" !== e)) {
                            n.next = 8;
                            break;
                          }
                          return (
                            (s = new M.providers.Web3Provider(t)),
                            (n.next = 5),
                            s.getSigner(0)
                          );
                        case 5:
                          (i = n.sent), (n.next = 12);
                          break;
                        case 8:
                          return (
                            (r = new D.a.providers.Web3Provider(
                              window.ethereum
                            )),
                            (n.next = 11),
                            r.getSigner(0)
                          );
                        case 11:
                          i = n.sent;
                        case 12:
                          a({ type: "UPDATE_SIGNER", payload: { signer: i } }),
                            (n.next = 18);
                          break;
                        case 15:
                          (n.prev = 15),
                            (n.t0 = n.catch(0)),
                            console.log(n.t0, "signer");
                        case 18:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 15]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        ye = (function () {
          var e = Object(I.a)(
            E.a.mark(function e(t) {
              var n;
              return E.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), se.userInfo(t);
                      case 3:
                        return (n = e.sent), e.abrupt("return", n.deposits > 0);
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0, "checkDeposit");
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        be = function (e) {
          var t = e.handleWallet,
            n = Object(T.b)(),
            a = Object(T.c)(function (e) {
              return e.common;
            }),
            i = a.userAddress;
          a.connectionType;
          return Object(h.jsxs)("div", {
            className: d.a.main,
            children: [
              Object(h.jsx)("img", {
                src:"/logo.png",
                alt: "logo",
                className: d.a.logo,
              }),
              Object(h.jsx)(x, {
                onClick: i
                  ? function () {
                      return n(pe());
                    }
                  : t,
                text: i
                  ? "".concat(i.slice(0, 6), "...").concat(i.slice(-6))
                  : "Connect Wallet",
                variant: "primary",
              }),
              Object(h.jsx)(C, {
                info: {
                  referal_rewards: 0,
                  team: 112,
                  my_referal: "",
                  marketing_wallet:
                    "0x593299A04cec407295352A89071CA6E49634e28b",
                  total_deposited: 32120800,
                  total_users: 11e3,
                },
              }),
              i &&
                Object(h.jsxs)(p.a, {
                  onClick: function () {
                    return n(pe());
                  },
                  className: d.a.exit,
                  children: [
                    Object(h.jsx)("img", { src: f, alt: "exit_icon" }),
                    Object(h.jsx)("p", { children: "Log Out" }),
                  ],
                }),
            ],
          });
        },
        je = n(218),
        he = n.n(je),
        xe = function (e) {
          var t = e.children,
            n = e.handleWallet;
          return Object(h.jsxs)("div", {
            className: he.a.main,
            children: [
              Object(h.jsx)("div", {
                className: he.a.sidebar,
                children: Object(h.jsx)(be, { handleWallet: n }),
              }),
              Object(h.jsx)("div", { className: he.a.content, children: t }),
            ],
          });
        },
        fe = n(219),
        Oe = n.n(fe),
        ve = n(103),
        Ae = n.n(ve),
        Te = n.p + "static/media/wallet.4021d4ae.svg",
        we = n.p + "static/media/dollar.49bebc85.svg",
        ge = n.p + "static/media/rocket.5533ae8d.svg",
        Ne = n.p + "static/media/sticker.45ea9d12.svg",
        Ce =
          (n.p,
          function (e) {
            var t = e.value,
              n = (e.percent, e.type),
              i = [
                {
                  type: "available",
                  className: Ae.a.available,
                  icon: Te,
                  text: "Available",
                },
                {
                  type: "deposits",
                  className: Ae.a.deposits,
                  icon: Ne,
                  text: "Deposits",
                },
                {
                  type: "claimed",
                  className: Ae.a.claimed,
                  icon: we,
                  text: "Claimed",
                },
                {
                  type: "payout",
                  className: Ae.a.payout,
                  icon: ge,
                  text: "Max Payout",
                },
              ],
              s = Object(a.useState)(i[0]),
              r = Object(l.a)(s, 2),
              c = r[0],
              u = r[1];
            return (
              Object(a.useEffect)(
                function () {
                  i.forEach(function (e) {
                    n === e.type && u(e);
                  });
                },
                [n]
              ),
              Object(h.jsxs)("div", {
                className: y()(Ae.a.main, c.className),
                children: [
                  Object(h.jsx)("div", {
                    className: Ae.a.iconContainer,
                    children: Object(h.jsx)("img", {
                      src: c.icon,
                      alt: c.type,
                    }),
                  }),
                  Object(h.jsxs)("p", {
                    className: Ae.a.value,
                    children: [t, " DOGE STAR"],
                  }),
                  Object(h.jsx)("span", {
                    className: Ae.a.text,
                    children: c.text,
                  }),
                ],
              })
            );
          }),
        Ie = n(460),
        Re = n.n(Ie),
        Ee = function (e) {
          var t = Object(T.c)(function (e) {
            return e.common;
          }).user;
          return Object(h.jsxs)("div", {
            className: Re.a.main,
            children: [
              Object(h.jsx)(Ce, {
                value: Number(t.available).toFixed(2),
                percent: "13.5%",
                type: "available",
              }),
              Object(h.jsx)(Ce, {
                value: Number(t.deposits).toFixed(2),
                percent: "13.5%",
                type: "deposits",
              }),
              Object(h.jsx)(Ce, {
                value: Number(t.claimed).toFixed(2),
                percent: "13.5%",
                type: "claimed",
              }),
              Object(h.jsx)(Ce, {
                value: Number(t.maxPayout).toFixed(2),
                percent: "13.5%",
                type: "payout",
              }),
            ],
          });
        },
        De = function (e) {
          return [
            Math.floor(e / 864e5),
            Math.floor((e % 864e5) / 36e5),
            Math.floor((e % 36e5) / 6e4),
            Math.floor((e % 6e4) / 1e3),
          ];
        },
        Me = n(35),
        ke = n.n(Me),
        _e = function (e) {
          var t = (function (e) {
              var t = new Date(e).getTime(),
                n = Object(a.useState)(t - new Date().getTime()),
                i = Object(l.a)(n, 2),
                s = i[0],
                r = i[1];
              return (
                Object(a.useEffect)(
                  function () {
                    var e = setInterval(function () {
                      r(t - new Date().getTime());
                    }, 1e3);
                    return function () {
                      return clearInterval(e);
                    };
                  },
                  [t]
                ),
                De(s)
              );
            })(e.date),
            n = Object(l.a)(t, 4),
            i = n[0],
            s = n[1],
            r = n[2],
            c = n[3];
          return Object(h.jsx)("div", {
            className: ke.a.main,
            children:
              c < 0
                ? Object(h.jsxs)(h.Fragment, {
                    children: [
                      Object(h.jsxs)("div", {
                        className: ke.a.block,
                        children: [
                          Object(h.jsxs)("div", {
                            className: ke.a.numbers,
                            children: [
                              Object(h.jsx)("div", {
                                className: ke.a.number,
                                children: "0",
                              }),
                              Object(h.jsx)("div", {
                                className: ke.a.number,
                                children: "0",
                              }),
                            ],
                          }),
                          Object(h.jsx)("span", { children: "Days" }),
                        ],
                      }),
                      Object(h.jsx)("label", { children: ":" }),
                      Object(h.jsxs)("div", {
                        className: ke.a.block,
                        children: [
                          Object(h.jsxs)("div", {
                            className: ke.a.numbers,
                            children: [
                              Object(h.jsx)("div", {
                                className: ke.a.number,
                                children: "0",
                              }),
                              Object(h.jsx)("div", {
                                className: ke.a.number,
                                children: "0",
                              }),
                            ],
                          }),
                          Object(h.jsx)("span", { children: "Hours" }),
                        ],
                      }),
                      Object(h.jsx)("label", { children: ":" }),
                      Object(h.jsxs)("div", {
                        className: ke.a.block,
                        children: [
                          Object(h.jsxs)("div", {
                            className: ke.a.numbers,
                            children: [
                              Object(h.jsx)("div", {
                                className: ke.a.number,
                                children: "0",
                              }),
                              Object(h.jsx)("div", {
                                className: ke.a.number,
                                children: "0",
                              }),
                            ],
                          }),
                          Object(h.jsx)("span", { children: "Minutes" }),
                        ],
                      }),
                      Object(h.jsx)("label", { children: ":" }),
                      Object(h.jsxs)("div", {
                        className: ke.a.block,
                        children: [
                          Object(h.jsxs)("div", {
                            className: ke.a.numbers,
                            children: [
                              Object(h.jsx)("div", {
                                className: ke.a.number,
                                children: "0",
                              }),
                              Object(h.jsx)("div", {
                                className: ke.a.number,
                                children: "0",
                              }),
                            ],
                          }),
                          Object(h.jsx)("span", { children: "Seconds" }),
                        ],
                      }),
                    ],
                  })
                : Object(h.jsxs)(h.Fragment, {
                    children: [
                      Object(h.jsxs)("div", {
                        className: ke.a.block,
                        children: [
                          Object(h.jsxs)("div", {
                            className: ke.a.numbers,
                            children: [
                              i < 10 &&
                                Object(h.jsx)("div", {
                                  className: ke.a.number,
                                  children: Object(h.jsx)("p", {
                                    children: "0",
                                  }),
                                }),
                              i
                                .toString()
                                .split("")
                                .map(function (e) {
                                  return Object(h.jsx)("div", {
                                    className: ke.a.number,
                                    children: Object(h.jsx)("p", {
                                      children: e,
                                    }),
                                  });
                                }),
                            ],
                          }),
                          Object(h.jsx)("span", { children: "Days" }),
                        ],
                      }),
                      Object(h.jsx)("label", { children: ":" }),
                      Object(h.jsxs)("div", {
                        className: ke.a.block,
                        children: [
                          Object(h.jsxs)("div", {
                            className: ke.a.numbers,
                            children: [
                              s < 10 &&
                                Object(h.jsx)("div", {
                                  className: ke.a.number,
                                  children: Object(h.jsx)("p", {
                                    children: "0",
                                  }),
                                }),
                              s
                                .toString()
                                .split("")
                                .map(function (e) {
                                  return Object(h.jsx)("div", {
                                    className: ke.a.number,
                                    children: Object(h.jsx)("p", {
                                      children: e,
                                    }),
                                  });
                                }),
                            ],
                          }),
                          Object(h.jsx)("span", { children: "Hours" }),
                        ],
                      }),
                      Object(h.jsx)("label", { children: ":" }),
                      Object(h.jsxs)("div", {
                        className: ke.a.block,
                        children: [
                          Object(h.jsxs)("div", {
                            className: ke.a.numbers,
                            children: [
                              r < 10 &&
                                Object(h.jsx)("div", {
                                  className: ke.a.number,
                                  children: Object(h.jsx)("p", {
                                    children: "0",
                                  }),
                                }),
                              r
                                .toString()
                                .split("")
                                .map(function (e) {
                                  return Object(h.jsx)("div", {
                                    className: ke.a.number,
                                    children: Object(h.jsx)("p", {
                                      children: e,
                                    }),
                                  });
                                }),
                            ],
                          }),
                          Object(h.jsx)("span", { children: "Minutes" }),
                        ],
                      }),
                      Object(h.jsx)("label", { children: ":" }),
                      Object(h.jsxs)("div", {
                        className: ke.a.block,
                        children: [
                          Object(h.jsxs)("div", {
                            className: ke.a.numbers,
                            children: [
                              c < 10 &&
                                Object(h.jsx)("div", {
                                  className: ke.a.number,
                                  children: Object(h.jsx)("p", {
                                    children: "0",
                                  }),
                                }),
                              c
                                .toString()
                                .split("")
                                .map(function (e) {
                                  return Object(h.jsx)("div", {
                                    className: ke.a.number,
                                    children: Object(h.jsx)("p", {
                                      children: e,
                                    }),
                                  });
                                }),
                            ],
                          }),
                          Object(h.jsx)("span", { children: "Seconds" }),
                        ],
                      }),
                    ],
                  }),
          });
        },
        Le = n(184),
        Ue = n.n(Le),
        Se = n(980),
        We = n(985),
        Ve = n(461),
        Be = n.n(Ve),
        He = function (e) {
          var t = e.children,
            n = e.className;
          return Object(h.jsx)("div", {
            className: y()(Be.a.main, n),
            children: t,
          });
        },
        Ze = n(92),
        Fe = n.n(Ze),
        ze = n(981),
        Pe = Object(ze.a)(function (e) {
          return {
            root: {
              background: "white",
              width: "100%",
              borderRadius: "12px",
              border: "1px solid #E8E8E8",
              "& input": {
                fontSize: "16px",
                fontFamily: "'Milky Nice', sans-serif",
                fontWeight: "400",
                padding: "0 24px",
                "@media screen and (max-width: 468px)": { fontSize: "16px" },
              },
              "& input::placeholder": { color: "gray" },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(236, 161, 159, .1)",
              },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                { borderColor: "rgb(236, 161, 159, .4)" },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                { borderColor: "rgb(236, 161, 159, .8)" },
              "& .MuiOutlinedInput-root": {
                borderRadius: 8,
                height: "60px",
                fontFamily: "Open Sans",
                fontSize: "16px",
                "@media screen and (max-width: 468px)": { height: "48px" },
              },
              "& .MuiFormHelperText-root.Mui-error": {
                margin: 0,
                marginTop: 5,
              },
            },
          };
        }),
        Xe = function (e) {
          var t = e.canWithdraw,
            n = Object(T.b)(),
            i = Object(T.c)(function (e) {
              return e.common;
            }),
            s = i.user,
            r = (i.contract, Object(a.useState)(0)),
            c = Object(l.a)(r, 2),
            u = c[0],
            o = c[1],
            d = Object(a.useState)(
              "0x0000000000000000000000000000000000000000" !== s.myReferral
                ? s.myReferral
                : ""
            ),
            m = Object(l.a)(d, 2),
            y = m[0],
            b = m[1],
            j = Object(a.useState)(!1),
            f = Object(l.a)(j, 2),
            O = f[0],
            v = f[1],
            A = (function () {
              var e = Object(I.a)(
                E.a.mark(function e(t) {
                  var a;
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          v(!0),
                            (e.t0 = t),
                            (e.next =
                              "APPROVE" === e.t0
                                ? 4
                                : "DEPOSIT" === e.t0
                                ? 8
                                : "WITHDRAW" === e.t0
                                ? 12
                                : 16);
                          break;
                        case 4:
                          return (e.next = 6), n(le(t));
                        case 6:
                          return (a = e.sent), e.abrupt("break", 17);
                        case 8:
                          return (
                            (e.next = 10), n(le(t, y, Number(u).toString()))
                          );
                        case 10:
                          return (a = e.sent), e.abrupt("break", 17);
                        case 12:
                          return (
                            (e.next = 14), n(le(t, y, Number(u).toString()))
                          );
                        case 14:
                          return (a = e.sent), e.abrupt("break", 17);
                        case 16:
                          return e.abrupt("break", 17);
                        case 17:
                          a && console.log(a), v(!1);
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          Object(a.useEffect)(
            function () {
              "0x0000000000000000000000000000000000000000" !== s.myReferral &&
                b(s.myReferral);
            },
            [s]
          );
          var w = Pe(),
            g = function (e, t) {
              return Math.trunc(e * Math.pow(10, t)) / Math.pow(10, t);
            };
          return Object(h.jsxs)(He, {
            className: Fe.a.main,
            children: [
              Object(h.jsx)("h4", { children: "Deposit DOGE STAR" }),
              Object(h.jsxs)("div", {
                className: Fe.a.fields,
                children: [
                  Object(h.jsxs)("div", {
                    className: Fe.a.field,
                    children: [
                      Object(h.jsxs)("div", {
                        className: Fe.a.header,
                        children: [
                          Object(h.jsx)("label", { children: "Amount" }),
                          Object(h.jsxs)("label", {
                            children: ["Balance: ", g(s.balance, 2)],
                          }),
                        ],
                      }),
                      Object(h.jsxs)("div", {
                        className: Fe.a.header,
                        children: [
                          Object(h.jsx)("label", {}),
                          Object(h.jsxs)("label", {
                            className: Fe.a.onlyMobile,
                            children: ["Staked Amount: ", g(s.deposits, 2)],
                          }),
                        ],
                      }),
                      Object(h.jsx)(Se.a, {
                        classes: w,
                        placeholder: "Value",
                        onChange: function (e) {
                          var t = Number(e.target.value);
                          t <= Number(s.balance) ? o(t) : o(Number(s.balance));
                        },
                        value: u,
                        InputProps: {
                          endAdornment: Object(h.jsx)(We.a, {
                            position: "end",
                            style: { width: "fit-content", marginRight: "0" },
                            children: Object(h.jsx)(p.a, {
                              onClick: function () {
                                o(g(s.balance, 2));
                              },
                              className: Fe.a.maxBut,
                              children: "MAX",
                            }),
                          }),
                        },
                      }),
                    ],
                  }),
                  "0x0000000000000000000000000000000000000000" ===
                    s.myReferral &&
                    Object(h.jsxs)("div", {
                      className: Fe.a.field,
                      children: [
                        Object(h.jsx)("div", {
                          className: Fe.a.header,
                          children: Object(h.jsx)("label", {
                            children: "Referral Address",
                          }),
                        }),
                        Object(h.jsx)(Se.a, {
                          classes: w,
                          placeholder: "Add Address",
                          onChange: function (e) {
                            b(e.target.value);
                          },
                          value: y,
                        }),
                      ],
                    }),
                ],
              }),
              Object(h.jsx)(x, {
                text: s.isAllowed ? "Deposit" : "Approve Deposit",
                variant: "primary",
                onClick: s.isAllowed
                  ? function () {
                      return A("DEPOSIT");
                    }
                  : function () {
                      return A("APPROVE");
                    },
                disabled: !u || !y || O,
                style: { marginBottom: "10px" },
              }),
              Object(h.jsx)(x, {
                text: "Withdraw",
                variant: "primary",
                onClick: function () {
                  return A("WITHDRAW");
                },
                disabled:
                  O ||
                  0 === Number(s.deposits) ||
                  !t() ||
                  Number(s.deposits) < Number(u),
              }),
            ],
          });
        },
        Ge = function (e) {
          var t = Object(a.useState)(!1),
            n = Object(l.a)(t, 2),
            i = n[0],
            s = n[1],
            r = Object(T.b)(),
            c = Object(T.c)(function (e) {
              return e.common;
            }),
            u = c.user,
            o = c.contract,
            d = (function () {
              var e = Object(I.a)(
                E.a.mark(function e(t) {
                  var n;
                  return E.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return s(!0), (e.next = 3), r(le(t));
                        case 3:
                          (n = e.sent) && console.log(n), s(!1);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            p = function () {
              var e = o.unlockDate,
                t = o.lockDate;
              return e < t
                ? Date.now() > e && Date.now() < t
                : e > t && Date.now() < t;
            };
          return Object(h.jsxs)("div", {
            className: Ue.a.main,
            children: [
              p()
                ? Object(h.jsxs)(h.Fragment, {
                    children: [
                      Object(h.jsx)("h2", {
                        children: "Withdrawal closes in:",
                      }),
                      Object(h.jsx)(_e, {
                        date: new Date(o.lockDate ? o.lockDate : 0),
                      }),
                    ],
                  })
                : Object(h.jsxs)(h.Fragment, {
                    children: [
                      Object(h.jsx)("h2", {
                        children: "Time till Withdrawal:",
                      }),
                      Object(h.jsx)(_e, {
                        date: new Date(o.unlockDate ? o.unlockDate : 0),
                      }),
                    ],
                  }),
              Object(h.jsxs)("div", {
                className: Ue.a.actions,
                children: [
                  Object(h.jsx)(x, {
                    onClick: function () {
                      return d("CLAIM");
                    },
                    disabled: u.deposits <= 0 || i,
                    text: "Claim",
                    variant: "secondary",
                  }),
                  Object(h.jsx)(x, {
                    onClick: function () {
                      return d("ROLL");
                    },
                    disabled: u.deposits <= 0 || i,
                    text: "Compound",
                    variant: "secondary",
                  }),
                  Object(h.jsx)("a", {
                    className: y()(Ue.a.main, Ue.a.secondary),
                    target: "_blank",
                    href: "https://pancakeswap.finance/swap?outputCurrency=0xc865A5938EdA8B5f6629A17fc066D74bB20Ab85d",
                    children: Object(h.jsx)(x, {
                      text: "Buy DOGE STAR",
                      variant: "secondary",
                    }),
                  }),
                ],
              }),
              Object(h.jsx)(Xe, { canWithdraw: p }),
            ],
          });
        },
        qe = n(289),
        Ye = n.n(qe),
        Qe = n.p + "static/media/main_logo.29ce63ee.svg",
        Je = function (e) {
          var t = e.handleWallet,
            n = e.disconnectWallet,
            a = e.userAddress,
            i = e.dispatch;
          return Object(h.jsxs)("div", {
            className: Ye.a.main,
            children: [
              Object(h.jsx)("img", {
                className: Ye.a.logo,
                src: Qe,
                alt: "logo",
              }),
              Object(h.jsx)(x, {
                onClick: a
                  ? function () {
                      return i(n());
                    }
                  : t,
                text: a
                  ? "".concat(a.slice(0, 6), "...").concat(a.slice(-6))
                  : "Connect Wallet",
                variant: "secondary",
              }),
            ],
          });
        },
        Ke = function (e) {
          return Object(h.jsx)(
            "svg",
            Object(O.a)(
              Object(O.a)(
                {
                  width: 20,
                  height: 20,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              {},
              {
                children: Object(h.jsx)("path", {
                  d: "M2.5 2.5h15a.833.833 0 0 1 .833.833v13.334a.833.833 0 0 1-.833.833h-15a.833.833 0 0 1-.833-.833V3.333A.833.833 0 0 1 2.5 2.5Zm3.333 8.333v3.334H7.5v-3.334H5.833Zm3.334-5v8.334h1.666V5.833H9.167Zm3.333 2.5v5.834h1.667V8.333H12.5Z",
                  fill: "currentColor",
                }),
              }
            )
          );
        },
        $e = function (e) {
          return Object(h.jsx)(
            "svg",
            Object(O.a)(
              Object(O.a)(
                {
                  width: 20,
                  height: 20,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              {},
              {
                children: Object(h.jsx)("path", {
                  d: "M7.775 9.583h1.808a3.75 3.75 0 0 1 3.75 3.75H7.5v.834h6.668v-.834a4.648 4.648 0 0 0-.739-2.5h2.405a4.166 4.166 0 0 1 3.764 2.376c-1.971 2.601-5.162 4.291-8.764 4.291-2.3 0-4.25-.492-5.833-1.354V8.393a5.806 5.806 0 0 1 2.775 1.19Zm-3.608 6.25a.833.833 0 0 1-.834.834H1.667a.833.833 0 0 1-.834-.834v-7.5a.833.833 0 0 1 .834-.833h1.666a.833.833 0 0 1 .834.833v7.5ZM15 4.167a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-5.833-2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z",
                  fill: "currentColor",
                }),
              }
            )
          );
        },
        et = function (e) {
          return Object(h.jsx)(
            "svg",
            Object(O.a)(
              Object(O.a)(
                {
                  width: 17,
                  height: 16,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              {},
              {
                children: Object(h.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M6.333 7.167a3.337 3.337 0 0 0 3.334-3.334A3.337 3.337 0 0 0 6.333.5 3.337 3.337 0 0 0 3 3.833a3.337 3.337 0 0 0 3.333 3.334ZM15.5 3h-.833v-.833a.836.836 0 0 0-.834-.834.836.836 0 0 0-.833.834V3h-.833a.836.836 0 0 0-.834.833c0 .459.375.834.834.834H13V5.5c0 .458.375.833.833.833a.836.836 0 0 0 .834-.833v-.833h.833a.836.836 0 0 0 .833-.834A.836.836 0 0 0 15.5 3Zm-3.333 11.667c0 .46-.373.833-.834.833h-10a.833.833 0 0 1-.833-.833 5.84 5.84 0 0 1 5.833-5.834 5.84 5.84 0 0 1 5.834 5.834Z",
                  fill: "currentColor",
                }),
              }
            )
          );
        },
        tt = n(116),
        nt = n.n(tt),
        at = function (e) {
          var t = e.setCurrentTab,
            n = e.currentTab;
          return Object(h.jsxs)("div", {
            className: nt.a.main,
            children: [
              Object(h.jsxs)(p.a, {
                onClick: function () {
                  return t(0);
                },
                className: y()(nt.a.item, 0 === n ? nt.a.active : ""),
                children: [
                  Object(h.jsx)(Ke, {}),
                  Object(h.jsx)("p", { children: "Stats" }),
                ],
              }),
              Object(h.jsxs)(p.a, {
                onClick: function () {
                  return t(1);
                },
                className: y()(nt.a.item, 1 === n ? nt.a.active : ""),
                children: [
                  Object(h.jsx)($e, {}),
                  Object(h.jsx)("p", { children: "Deposit" }),
                ],
              }),
              Object(h.jsxs)(p.a, {
                onClick: function () {
                  return t(2);
                },
                className: y()(nt.a.item, 2 === n ? nt.a.active : ""),
                children: [
                  Object(h.jsx)(et, {}),
                  Object(h.jsx)("p", { children: "Referrals" }),
                ],
              }),
            ],
          });
        },
        it = n(989),
        st = n(156),
        rt = n.n(st),
        ct = n(462),
        ut = n.n(ct),
        lt = function (e) {
          var t = e.children;
          return Object(h.jsx)("div", { className: ut.a.main, children: t });
        },
        ot = function (e) {
          return Object(h.jsx)(
            "svg",
            Object(O.a)(
              Object(O.a)(
                {
                  width: 14,
                  height: 14,
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e
              ),
              {},
              {
                children: Object(h.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M.47.47a.75.75 0 0 1 1.06 0L7 5.94 12.47.47a.75.75 0 1 1 1.06 1.06L8.06 7l5.47 5.47a.75.75 0 1 1-1.06 1.06L7 8.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L5.94 7 .47 1.53a.75.75 0 0 1 0-1.06Z",
                  fill: e.color,
                }),
              }
            )
          );
        },
        dt = function (e) {
          var t = e.onClose,
            n = e.connectMetamask,
            a = e.connectWalletConnect,
            i = Object(T.b)();
          return Object(h.jsx)(lt, {
            children: Object(h.jsxs)("div", {
              className: rt.a.main,
              children: [
                Object(h.jsxs)("div", {
                  className: rt.a.header,
                  children: [
                    Object(h.jsx)("h4", { children: "Connect Wallet" }),
                    Object(h.jsx)(it.a, {
                      onClick: t,
                      children: Object(h.jsx)(ot, { color: "black" }),
                    }),
                  ],
                }),
                Object(h.jsxs)("div", {
                  className: rt.a.content,
                  children: [
                    Object(h.jsxs)(p.a, {
                      onClick: function () {
                        return i(n());
                      },
                      className: rt.a.button,
                      children: [
                        Object(h.jsx)("img", {
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAgCAYAAACYTcH3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgsSURBVHgBvVhdbBxXFT733pn983q9Tpo4dnHiuGnrxCZAm0BEqSggOY7SpC1CQVRVBQXJT7RReQigQDYkEIRQUR4KJX1AAkQRqIQqRElLK7lIdlonTSB1jN1gO4DTxLFje9fe35m5h3PnZ2dm7VRCrXrl8czcOfec73zn515bAI3MA23pL2+pe3N/d7q05zNtl387MGXAhzAufueujvva49/a3JQs9o0t/FdTk1ak/PiNBdx8ZkL+qmfj3IGx77cfL1XYzzt/PPYv+IDHhb1t6XRSbBPC3Hf+P/nPjk1ZDIAL+jTAlECme80ZxmCbetY5wL3rBHQ1CyijOAESnm//wcQJeJ9jZP/d6xsixccR2d58Wab/OmrC9CLSF7qQz+NkYxM71NNyt0Q54ixB+wcI2cY1HLau0yBK3FnIJpDB4Qs3608+dHRo6v8BMb5/Q7eumU9rTG5Xnr8zbcHAhAVl07UHzJUUn2eZnub9DPFQSIMr0xBj0NOpQYruas4gDwjncRET52OcFUEE1lhENrcMy30t57FFSnhSZ7JZvZuIcO7fEi6+a5IqFgDi3BH4s+zg9jV/AcSdio2wANjPGoXtU22CmPIt1ycBIlqNaGAQCMgt+OpyRYSXR0yYLWDY28AzIo5wyokhB4iaZ1UQ3jAlQv84UTtuUrjsCEKpvIxODxW9VyruIz1fprC8+A+DgMiAqOeFr4AxdkmzgE2IgCJH2LUamBy+LuFq1oAdmzRIRhkQRuAhZlgVU7minAAYvGLC2+/SA/NC4RpnIS+8dUOcFL4edCwEyptE554lul+8YMA/pywolgFqtalhUIeazSP86e8VePuadHXVMu7kIAusRcEGODBxg15KLAQgmD/gsOQCMkh//5gFfZQDiEEbzP65REz8+aIBc8VlfAsCZx58zw4f5pmXJ2cZhQoBw0uxRgXzY6LCszLBfDIDrDZS5emixjTWZnk4eWmMZU5dnWTf7W7tijLjLE3EoBbQMqMuAtDdocPqJIMkVZWmg8uasyaXc6rn5LAB8wUIkLwM4/4oke87+MzN1aPUFU9VQeAtcVC/AdjV5QBxPHZ1V8PpvCaJnd0f1eH2tD/vfAyWdmj0Z7Pam7xl1y4LOExXp9nyrLQ0MHhks243QqhVGWAdpfMY1xnspIa5sYn7SoLJHAgdNUGjIVoWoq+vDz93R7KHpj5ZrTx3QYJCcscqDvfQXrXlIxpEBAsxrGlumKrQmNODqp2CwboVHFYSkxHSVaSSNyzPSNApfv7ga1O/s3dtFNZhZmm7Ka6tzUTt2pUMNqzm0JJ2vFpccLpqKNTBiLr7mccKQFi2nQBtXstob9bg6pyEKzMSxm4gXM8qKtkU43JfaMnw927f21TPf1YXDcSZZAvUwisVBrXhUEN5m6iDUDvKZmsAud/UIUFtI8EWkicWr+fwaOfhyb02096n1hV6j86DroHdZedmJZiW5ZDO/LCr8sY6TmBE1ahiL5837RfFkvROCOD0X03okEj4vauOCmKtzrd49uw4XDvS0aZza7sPw9GgDDau0Ekxo85KDJUllOkqlRCKRQn2Fh0sDKrPUknabKp7pUJraJ1pIoGOQjzBQibU0AXeN5C5t6MKJhop7fA6qIfaG/G4hHQ6Rl4xOiXwyqKlP3ulkPw02Z3nocpz2qYmBMxUYgfLIJ6wKDWURH0yCg0pZrNj22CBENK1KT37xSqYuI57nI8YQu0lfTyOkGqIQ3Nr9HhXBz8+DE1DJrKjmiqn2kYpxMy0Bs9hY+rcbWvrfnnbqth8PC5Aj0rfSQwzKqS0wbDxH3Xc1ZIsjIbpC3RLt0oWcnTIajBdEQaLZXEJi6wzlTaqoqZJ80U+F00giwuZVrLFIid8lOxR6etfcnRCmC5E7tRSutG9tEO7IUPvrEGhjEn/EzFYHzU786YIVYySS0SxMSJkdV7lnQ3kPTq7Wkj6HtFiuvU1O9qUpKoa1IVuZagk9DY5KSljqD513cerCVxihHO/ztFugiYs5qU6PNlrohHaSOnUz9wUUBfnCjT7kpbLIrWk5bYAhFzWoopwGGHkoiC+VcdNxJ2+oesY7iUExEsL1ZtKRVXqCIW8VdWhqlOdeYLrbGcBI5pEfImQPeXar3qtQpRMadRnDMoZ1SMcAdNgkDOchvdOTsCvz5ZCLjyxVYe2JMm5ZS+E31cSCQHca1YYBmQhf0VbMKOvNkbKTy05PSj66FecFBQWTdur6keuw0LbQ/DM70fgb0Pn7VAyl5Js48fhyO4WiIyfdHS4+6QqPFVVS4LgvhfL2qsaWOIMOS7JFg+x4womSEGlZJGHzmfZsB5KH+sFGV8N1270u077FqZn5qBy5zcB61shMvwb4OaC7UgqpS9zpnJuhuSl0ZlUv7bxyMjNyUzbIP2ZsM0PURh8XVKz/zKobHgYKu0PquDb860tTdDW2hKSTcRjtgJjzVawCHj07E8hXr4OnLNw2/Dy3N5a8I1dx94qaO5ndbjaBrXnYLvI2JQl9D+WNn01bzVv7dUR09yVe/Lrj0It75z7B6+ylobCJ779fGpg3wUJ8itUr/fbLAbzhQQl8pfsULpsvB7UaaC4TLcXypZ45SdT6cFjx96ilD0AZ0698BwpyGhce1jX9Qa4xfE0R2cOwzAHKtI8dP/OR0+7078YfLqrdVWq+AWdmY/RnvwAMWIn0awVew0CbrGJA+vfoE57Yl5GTt/zw9Fz8B5j8OQf1uQrlW9EdW0PVYfls2k7Om+a8pnhqYXTvb29t/zXyqXMphUJKD5Iq7rbMxOPqbn/ASDtcyLEeJOBAAAAAElFTkSuQmCC",
                          alt: "metamask",
                        }),
                        Object(h.jsx)("p", { children: "Metamask" }),
                      ],
                    }),
                    Object(h.jsxs)(p.a, {
                      onClick: function () {
                        return i(a());
                      },
                      className: rt.a.button,
                      children: [
                        Object(h.jsx)("img", {
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAaCAYAAADbhS54AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR2SURBVHgB1VdrbBRVFD7n3mm7bVKVKlqtCsZAIiFBRQJGKbtboMbEKIEfRhOiMQV2t8UUFV/RCBqNVSppu9sHKMY/+INQCcYY+thpjImoP5SYQAiRxsYHCZoGX92dufd4pqXN0t7ZnV38w5ednbn3fOfcb+499zEIJSB8gK6BCfUIKrgXBC7nqloAqiYA5N84Ao0BwSkSMCAtmR5qwnNQJLAY8tpeulUp3cwi+ILKID7cwAUiPERCvG7HcBQCIpCw+96n6lDGfVED7uBiBZQGxS/UNuaO7jqzfVGmELmgsGjvxO2grM94mBbD/wDuvZMgxIOFei+vsEhndhlIMciP10Fh/MuXgGA9+jOhesCOVfzgRxB+hvX76DaSIu0rimCcgN5Q5fJuysh56bhVxVeISFaD1quY0M6cX3zC1yHJkXpuw699y8+QcdX9rHqewXQONHVkK63OL5/CP2cb7QT+xbfj3rX+I3o187feLAh2stCFs6g10lFL+H7W1H7+oUw5bUx5brpMgCdlmYgUO/2jXbQAhO7nHr5ruk4jvTwSK3vTz6dg8keS7l5mPc2yvidprbW34nkoAeEk1QqhPyeiZUi0azhR9hpcLiIp97HJRfUy0dhONZFupzEId7LHvER3HDXAQ3XQjstXoEiE32PRIdVPmveBrHzYbsVxKBLRpPMWodhElWKd/SSOYiSV5S1FHuOhqvEIArFtKCafDxxwPy2gjPsJIN45WUH0HWXdDXZr5WjQGOGk8w4iPnux+Icr5TqeeOLItCgPmmgnd3d7kICrP6D5lNWfzojy4D1XWEdXd9D8IDE4TVI5ojzUSKUGvXWsdg6bsDWSUh35AjbsoxusCW0zeelsGwIulZY7spI5kF9UF99ic/2hmpcY3GZ2oxYe93dNluW9VEWOPsqcJeADFndHlaOPeFyjqC5nD98SxpYRmwUn+37eXR/lcsZAeIaHdXduXfRDqrtKKd47aQUUBK1k7kC4g27OrW3oVrs5mXcYHCZIqU12TPbOrGPhTncjSjhkCs9v//ZwXL7Ax56rlVJfg2lDJ/idc0Wx4OsNIU7/48oVx7fjBS+nwDB8F2NsTCesw1Nt5iCcVFsRqRuMCy95E6KeTfcYAv4mQUYBsny2kYPsfZPB/1sW/hURNM9158EBvS0dL++brpsjINztPoEEByAwcFRop3GoOXTaK9X3TCySSqZ5dtYFjcBHoRY7IbsuiWoi8ozcwvQk5NnkpyLCGIEbtROhM7nV3hlOKyvNwW+B/HD5lLF5OIEHZxt898o1fbRBuupj7uZyk53z7icEJzIUD/1osk/tJvobVn+tXxtAknMKD5tMvuexkS3YzyeAl3zM550y9yE/UR6ONeFZASLqcU12XqZa/UTlFebBjpXtIdItdEktH4m1Cn/RVHECCmAojieEq9ZM+swI8v4wwcvU3ny+gT5GIl2cc4J6eFL8qrVqsFsqTkERaOijxdpRaZ56NwqSj5tyqmSEU7Qq2sEfJqX6d9PCaA/Vw5WO/wC16NOVOqQQKwAAAABJRU5ErkJggg==",
                          alt: "metamask",
                        }),
                        Object(h.jsx)("p", { children: "WalletConnect" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        pt = function (e) {
          var t = Object(T.b)(),
            n = e.currentTab,
            i = e.setCurrentTab,
            s = e.isOpenConnectWallet,
            r = e.handleWallet,
            c = e.setIsOpenConnectWallet,
            u = Object(T.c)(function (e) {
              return e.common;
            }),
            l = u.userAddress,
            o = u.connectionType;
          return (
            Object(a.useEffect)(function () {
              t(ce());
            }, []),
            Object(a.useEffect)(function () {
              if (l)
                switch (o) {
                  case "metamask":
                    t(oe());
                    break;
                  case "WALLET_CONNECT":
                    t(de());
                }
            }, []),
            Object(a.useEffect)(
              function () {
                l && c(!1);
              },
              [l]
            ),
            Object(h.jsxs)(xe, {
              handleWallet: r,
              children: [
                s &&
                  Object(h.jsx)(dt, {
                    connectMetamask: oe,
                    connectWalletConnect: de,
                    onClose: r,
                  }),
                Object(h.jsxs)("div", {
                  className: Oe.a.main,
                  children: [Object(h.jsx)(Ee, {}), Object(h.jsx)(Ge, {})],
                }),
                Object(h.jsxs)("div", {
                  className: Oe.a.mobile,
                  children: [
                    Object(h.jsx)(Je, {
                      dispatch: t,
                      disconnectWallet: pe,
                      userAddress: l,
                      handleWallet: r,
                    }),
                    Object(h.jsxs)("div", {
                      className: Oe.a.content,
                      children: [
                        0 === n && Object(h.jsx)(Ee, {}),
                        1 === n && Object(h.jsx)(Ge, {}),
                        2 === n &&
                          Object(h.jsx)(He, {
                            children: Object(h.jsx)(C, {
                              info: {
                                referal_rewards: 0,
                                team: 112,
                                my_referal: "",
                                marketing_wallet:
                                  "0x593299A04cec407295352A89071CA6E49634e28b",
                                total_deposited: 32120800,
                                total_users: 11e3,
                              },
                            }),
                          }),
                      ],
                    }),
                    Object(h.jsx)(at, { setCurrentTab: i, currentTab: n }),
                  ],
                }),
              ],
            })
          );
        },
        mt = function (e) {
          var t = Object(a.useState)(0),
            n = Object(l.a)(t, 2),
            i = n[0],
            s = n[1],
            r = Object(a.useState)(!1),
            c = Object(l.a)(r, 2),
            u = c[0],
            o = c[1];
          return Object(h.jsx)(h.Fragment, {
            children: Object(h.jsx)(pt, {
              setIsOpenConnectWallet: o,
              currentTab: i,
              setCurrentTab: s,
              isOpenConnectWallet: u,
              handleWallet: function () {
                o(!u);
              },
            }),
          });
        },
        yt =
          (n(922),
          function (e) {
            return Object(h.jsx)(s.a, {
              children: Object(h.jsx)(u.a, {
                children: Object(h.jsx)("div", {
                  className: "main",
                  children: Object(h.jsxs)(r.d, {
                    children: [
                      Object(h.jsx)(r.b, {
                        exact: !0,
                        path: "/app",
                        element: Object(h.jsx)(mt, {}),
                      }),
                      Object(h.jsx)(r.b, {
                        path: "*",
                        element: Object(h.jsx)(r.a, { to: "/app" }),
                      }),
                    ],
                  }),
                }),
              }),
            });
          }),
        bt = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 991))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  i = t.getFCP,
                  s = t.getLCP,
                  r = t.getTTFB;
                n(e), a(e), i(e), s(e), r(e);
              });
        },
        jt = n(463),
        ht = n(464),
        xt = Object(X.b)(J);
      Object(ht.createRoot)(document.getElementById("root")).render(
        Object(h.jsx)(T.a, {
          store: J,
          children: Object(h.jsx)(jt.a, {
            persistor: xt,
            children: Object(h.jsx)(yt, {}),
          }),
        })
      ),
        bt();
    },
  },
  [[923, 1, 2]],
]);
//# sourceMappingURL=main.b2838346.chunk.js.map
