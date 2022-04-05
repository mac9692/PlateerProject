package com.plateer.employee.service;
import com.plateer.employee.mapper.MemberMapper;
import com.plateer.employee.vo.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{

    private final MemberMapper memberMapper;

    @Override
    public List<Member> getMemberList(String startNumber, String countNumber) {
        return memberMapper.getMemberList(startNumber, countNumber);
    }

    @Override
    public Integer countMember() {
        return memberMapper.countMember();
    }

    @Override
    public Member viewMember(String memberId) {
        return memberMapper.viewMember(memberId);
    }

    @Override
    public Integer insertMember(Member member) {
        return memberMapper.insertMember(member);
    }

    @Override
    public Integer updateMember(Member member) {
        return memberMapper.updateMember(member);
    }

    @Override
    public Integer deleteMember(String memberId) {
        return memberMapper.deleteMember(memberId);
    }
}
